const API = import.meta.env.VITE_API_URL;

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw Object.assign(new Error("Request failed"), {
      status: res.status,
      data: errBody,
    } as ApiError);
  }
  return res.json() as Promise<T>;
}

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
};
export type ProjectsResponse = { items: Project[] };
export type ApiError = Error & { status?: number; data?: unknown };

export const api = {
  getProjects: () =>
    fetch(`${API}/api/projects`, { credentials: "include" }).then(
      json<ProjectsResponse>
    ),
  getProject: (slug: string) => fetch(`${API}/api/projects/${slug}`).then(json),
  sendContact: (playload: { name: string; email: string; message: string }) =>
    fetch(`${API}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playload),
    }).then(json<{ ok: true }>),
};
