import ApiComponent from '../Api/ApiComponent'

const END_POINT = {
    API: "Category"
}

const getAPI = () => {
    return ApiComponent.get(`${END_POINT.API}`);
}

export default getAPI;