import axios from '@/lib/axios';

/*
  page: number;
  pageSize: number;
  title: string;
  type: string;
  tags: string[];
  source: string;
  dynasty: string;
  submitter: string;
  author: string;
  status: string;
  */
export const getAllAuthor = async () => {
  return axios.get('/author')
};
