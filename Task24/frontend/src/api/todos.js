export class TodoAPI {
    static prefix = "todos";
    static async getAll(url) {
        try {
            const resp = await fetch(`${url}/${TodoAPI.prefix}`);

            if (!resp.ok) {
                console.error("Filed to get todos fetch error.");
            }

            return await resp.json();
        } catch (e) {
            console.error(e);
            throw new Error("Filed to get todos.");
        }
    }

    static async save(url, data) {
        try {
            const resp = await fetch(`${url}/${TodoAPI.prefix}`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!resp.ok) {
                console.error("Filed to upload todo fetch error.");
            }
        } catch (e) {
            console.error(e);
            throw new Error("Filed to upload todos.");
        }
    }

    static async delete(url, data, id) {
        try {
            const resp = await fetch(`${url}/${TodoAPI.prefix}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!resp.ok) {
                console.error("Filed to upload todo fetch error.");
            }
        } catch (e) {
            console.error(e);
            throw new Error("Filed to upload todos.");
        }
    }

    constructor(title, description = "", completed = false) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}