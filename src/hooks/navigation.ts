import { useRouter, usePathname } from "next/navigation";

export const useAppNavigation = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToLogin = (from?: string) => {
    if (from) router.push(`/login?from=${from}`);
    else router.push("/login");

  };

  const navigateToOtpVerification = (phoneNumber: string) => {
    router.push(`?phoneNumber=${phoneNumber}&page=verification`);
  };

  const navigateToProfile = (tab = "my-profile") => {
    router.push(`/profile?tab=${tab}`);
  };

  const navigateToTemplateListing = (searchQuery?: string) => {
    router.push(`/templates${searchQuery ? `?search=${searchQuery}` : ""}`);
  };

  const navigateToTemplateDetails = (templateId: string) => {
    router.push(`/templates/${templateId}`);
  };

  const navigateToCreateNewTemplatePage = () => {
    router.push("/dashboard/artist/template/create");
  };

  const navigateToMyProjects = () => {

    router.push("/my-projects");
  };

  const navigateToMyVideos = () => {
    router.push("/my-exports");
  };


  const navigateToSettings = () => {
    router.push("/settings");
  };

  const navigateToPricing = () => {
    router.push("/pricing");
  };

  const navigateToContactUs = () => {
    router.push("/contact-us");
  };

  const navigateToPage = (path: string, from?: string) => {
    if (from) path = `${path}?from=${from}`;
    if (path.startsWith("/")) router.push(path);
    else router.push(`${currentPath}/${path}`);
  };

  const navigateToBlog = (slug: string) => {
    navigateToPage(`/blog/${slug}`)
  }

  const navigateToStudio = (projectId?: string) => {
    if (!projectId)
      projectId = 'demo'
    router.push(`/studio/${projectId}`);
  }

  return {
    navigateToPage,
    navigateToHome,
    navigateToProfile,
    navigateToTemplateListing,
    navigateToTemplateDetails,
    navigateToCreateNewTemplatePage,
    navigateToLogin,
    navigateToOtpVerification,
    navigateToMyVideos,
    navigateToSettings,
    navigateToPricing,
    navigateToContactUs,
    navigateToBlog,
    navigateToStudio,
    navigateToMyProjects
  };
};
