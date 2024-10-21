"use client";
import React, { useState } from "react";
import {
  Hits,
  InstantSearch,
  SearchBox,
  useConnector,
} from "react-instantsearch";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

import { Button } from "@nextui-org/react";
import { useAppNavigation } from "@/hooks/navigation";
import Autocomplete from "./Autocomplete";

import { useUserStore } from "@/stores/user";
import useStore from "@/hooks/useStore";
import Link from "next/link";
import { TTemplate, TTemplateWithId } from "@/models/Template";

type TProps = {};
export default function GlobalSearch(props: TProps): JSX.Element {
  const navigation = useAppNavigation();
  const user = useStore(useUserStore, (state) => state.user);
  const [searchText, setSearchText] = useState<string | undefined>(undefined);

  const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
      apiKey: "NFtSRUFssnCfTyj1zCBpyrVcI4YObGuP", // Be sure to use an API key that only allows search operations
      connectionTimeoutSeconds: 5,
      nodes: [
        {
          host: "2e8cvbl1i4fan09sp-1.a1.typesense.net",
          port: 443,
          // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
          protocol: "https",
        },
      ],
      cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  query_by is required.
    additionalSearchParameters: {
      query_by: "name,description,category,tags",
    },
  });

  const searchClient = typesenseInstantsearchAdapter.searchClient;

  function searchTextAndNavigate() {
    navigation.navigateToTemplateListing(searchText);
  }
  return (
    <div className="md:w-full w-full min-w-10">
      <InstantSearch
        indexName="typesenseDB"
        searchClient={searchClient}
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <SearchBox
          classNames={{
            root: "min-w-1/3 w-full flex flex-row justify-center gap-4",
            form: "w-full min-w-1/3 justify-center ",
            input:
              "w-full min-w-1/3 border-2 rounded-lg border-gray-300 bg-white text-primary-50  h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary color-foreground",
            submit: "hidden",
            reset: "hidden",
          }}
          placeholder="Search Templates..."
          searchAsYouType={true}
          slot="SearchBox"
          onChangeCapture={(e: any) => {
            if (e.target?.value) setSearchText(e.target?.value);
          }}
        ></SearchBox>
        <Autocomplete
          onSuggestionClick={(template: TTemplateWithId) => {
            navigation.navigateToTemplateDetails(template.id);
          }}
        ></Autocomplete>
      </InstantSearch>
      <div className="flex flex-row w-full justify-center mt-10 gap-4 z-0">
        <Button
          variant="ghost"
          color="primary"
          onClick={() => searchTextAndNavigate()}
        >
          Search
        </Button>
        <Link href="/templates">
          <Button variant="ghost" color="secondary">
            Explore
          </Button>
        </Link>
      </div>
    </div>
  );
}
