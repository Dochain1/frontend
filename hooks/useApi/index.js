import axios from 'axios';
import { useState } from 'react';
const options = { headers: { 'Content-Type': 'application/json' } };

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const addBriefcase = async (data) => {
    const briefcase = {
      type_of_demand: data.typeComplaint,
      crime: data.crime,
      crime_data: data.crimeDate,
      name_of_plaintiff: data.demanding,
      plaintiffs_attorney: data.demandingLawyer,
      name_of_defendant: data.defendant,
      defendants_attorney: data.defendantLawyer,
      place_of_case: data.casePlace,
      place_of_crime: data.crimePlace,
    };

    const response = await axios.post(
      'https://api-dochain.herokuapp.com/api/v1/briefcase/',
      briefcase,
      options
    );
    return response;
  };

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

  return { loading, addBriefcase, getBriefcases };
};

export default useApi;

// type_of_demand
// crime
// crime_data
// name_of_plaintiff
// plaintiffs_attorney
// name_of_defendant
// defendants_attorney
// place_of_case
// place_of_crime
