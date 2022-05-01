import axios from "axios";
import baseApi from "../utils/baseApi";
import { Header } from "../utils/header";

const getTestimoni = async () => {
  try {
    const data = await axios.get(
      baseApi.BASE_URL + baseApi.ENDPOINT.testimoni,
      Header()
    );
    if (data.status === 200) {
      return {
        status: data.status,
        data: data.data,
        success: true,
      };
    } else {
      return {
        status: data.status,
        data: [],
        success: true,
      };
    }
  } catch (err) {
    return {
      success: false,
      status: 404,
      data: [
        {
          err,
        },
      ],
    };
  }
};

const getHelpAndTips = async () => {
  try {
    const data = await axios.get(
      baseApi.BASE_URL + baseApi.ENDPOINT.helpandtips,
      Header()
    );
    if (data.status === 200) {
      return {
        status: data.status,
        data: data.data,
        success: true,
      };
    } else {
      return {
        status: data.status,
        data: [],
        success: true,
      };
    }
  } catch (err) {
    return {
      success: false,
      status: 404,
      data: [
        {
          err,
        },
      ],
    };
  }
};

export { getTestimoni, getHelpAndTips };
