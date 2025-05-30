export class IndexController {
    public async getResources(req, res) {
        // Logic to get resources
        res.send("Get resources");
    }

    public async createResource(req, res) {
        // Logic to create a resource
        res.send("Create resource");
    }

    public async updateResource(req, res) {
        // Logic to update a resource
        res.send("Update resource");
    }

    public async deleteResource(req, res) {
        // Logic to delete a resource
        res.send("Delete resource");
    }
}