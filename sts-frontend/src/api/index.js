import { Directus } from '@directus/sdk';

const directus = new Directus('http://localhost:8055');


async function getProjects() {
    return await directus.items('projects').readMany();
}

async function getServiceTypes() {
    return await directus.items('service_types').readMany();
}


async function getFiles() {
    return await directus.items('directus_files').readMany();
}

async function getFilesIds() {
    return await directus.items('directus_files_id').readMany();
}
export {getProjects, getFiles, getServiceTypes, getFilesIds}