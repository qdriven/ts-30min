import { supabaseClient } from "./client";
import axios from "axios";
const JSON_IP_URL = "https://jsonip.com";

export async function logIpAddress(ipAddress: string, accessCode: string) {
  const { data, error } = await supabaseClient.rpc("checkipaddress", {
    code: accessCode,
    ipaddr: ipAddress,
  });
  if (error) {
    console.log(error);
    return false;
  } else {
    return data;
  }
}

export async function getClientIpAddress(): Promise<string> {
  const response = await axios.get(JSON_IP_URL);
  const ipAddress = response.data.ip;
  return ipAddress;
}
