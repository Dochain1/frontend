import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import { useState } from 'react';
const options = { headers: { 'Content-Type': 'application/json' } };

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { account } = useWeb3React();

  //add a case
  const addBriefcase = async (data) => {
    setLoading(true);
    const response = await axios.post(`${API_URL}briefcase`, data, options);
    setLoading(false);
    return response;
  };

  //get all cases
  const getBriefcases = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}briefcase`, options);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //get all cases
  const getBriefcasesByAddress = async (account) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}briefcase/user/${account}`,
        options
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  //get a case
  const getBriefcase = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}briefcase/${id}`, options);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //register a user and his publicKey
  const register = async (publicKey, account) => {
    setLoading(true);
    const body = { address: account, publicKey: publicKey };
    try {
      const response = await axios.post(
        `${API_URL}documents/register`,
        body,
        options
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //get breifcase documents
  const getDocuments = async (caseId) => {
    setLoading(true);
    const body = { caseId };
    try {
      const response = await axios.post(
        `${API_URL}documents/get_documents`,
        body,
        options
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //get a file
  const getFile = async (tokenId, cid) => {
    setLoading(true);
    const body = { address: account, tokenId, cid };
    try {
      const response = await axios.post(
        `${API_URL}documents/get_file`,
        body,
        options
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    addBriefcase,
    getBriefcases,
    getBriefcase,
    register,
    getBriefcasesByAddress,
    getDocuments,
    getFile,
  };
};

export default useApi;
