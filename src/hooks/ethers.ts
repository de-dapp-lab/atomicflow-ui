import { ethers } from "ethers";
export default function stringToBigNumberHash(value: string): ethers.BigNumber {
  const bytesValue = ethers.utils.toUtf8Bytes(value);
  const hash = ethers.utils.keccak256(bytesValue);
  const bigNumberHash = ethers.BigNumber.from(hash);
  return bigNumberHash;
}
