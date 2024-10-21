import { nextFetch } from "@/lib/fetch";

export async function duplicateProject(projectId: string, projectName: string) {
    const { data, status, ok } = await nextFetch(`/api/project/duplicate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId, name: projectName }),
    });
    if (!ok)
        throw new Error(`Error duplicating project: ${status}`);

    return data.data.projectId as string;
}

export async function deleteProject(projectId: string) {
    const { data, status, ok } = await nextFetch(`/api/project`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId }),
    });
    if (!ok)
        throw new Error(`Error deleting project: ${status}`);

    return data.data.projectId as string;
}