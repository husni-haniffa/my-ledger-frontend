const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

export async function apiRequest<T>(
    endpoint: string,
    token: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...options?.headers,
        },
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || "Something went wrong")
    }

    return data as T
}