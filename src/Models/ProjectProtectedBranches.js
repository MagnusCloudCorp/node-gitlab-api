const BaseModel = require('./BaseModel');
const Utils = require('../Utils');

class ProjectProtectedBranches extends BaseModel {
    all(projectId) {
        const pId = Utils.parse(projectId);
        return this.get(`projects/${pId}/protected_branches`);
    }

    getOne(projectId, branchId) {
        const [pId, bId] = [projectId, branchId].map(Utils.parse);

        return this.get(`projects/${pId}/protected_branches/${bId}`);
    }

    protect(projectId, options = {}) {
        const [pId] = [projectId].map(Utils.parse);

        return this.post(`projects/${pId}/protected_branches`, options);
    }

    unprotect(projectId, branchId) {
        const [pId, bId] = [projectId, branchId].map(Utils.parse);

        return this.delete(`projects/${pId}/protected_branches/${bId}`);
    }
}

module.exports = ProjectProtectedBranches;