import { TEST_QUERY } from '@utils/url';
import ApiClient from '@/api/apiclient';

const apiClient = new ApiClient();

export const testQuery = (params, setting) => apiClient.get(TEST_QUERY, params, setting);
export const sdad = '';
