import React from "react";
import useAutocomplete, { UseAutocompleteProps } from "@/hooks/autocomplete";
import { Hit } from "instantsearch.js";
import { TTemplate, TTemplateWithId } from "@/models/Template";

type TProps = {
  hit: Hit;
  refine: (query: string) => void;
  onSuggestionClick: (template: TTemplateWithId) => void;
};
const AutoCompleteSuggestion = (props: TProps) => {
  const { hit, refine, onSuggestionClick } = props;

  return (
    <li key={hit.objectID} className="w-full">
      <button
        onClick={() => onSuggestionClick(hit as unknown as TTemplateWithId)}
        className="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        {hit.name}
      </button>
    </li>
  );
};
export default function Autocomplete(
  props: UseAutocompleteProps & {
    onSuggestionClick: (template: TTemplateWithId) => void;
  }
) {
  const { indices, currentRefinement, refine } = useAutocomplete(props);

  if (!currentRefinement || !indices) return null;
  return (
    <>
      {indices.map((index) => {
        return (
          <div key={index.indexName}>
            <ul>
              {index.hits.map((hit) => (
                <AutoCompleteSuggestion
                  key={hit.objectID}
                  hit={hit}
                  refine={refine}
                  onSuggestionClick={props.onSuggestionClick}
                ></AutoCompleteSuggestion>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
