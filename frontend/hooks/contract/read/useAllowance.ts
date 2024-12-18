import { useReadContract } from 'wagmi'
import USDe from '../../../components/ui/contract/USDe.json'
import { USDE_ADDRESS } from '@/utils/constants/addresses'
export function useAllowance(userAddress: `0x${string}`, spenderAddress: `0x${string}`, contracAddress: `0x${string}` = "0x0") {
  if (contracAddress == "0x0") contracAddress = USDE_ADDRESS
  const { data, isError, isLoading } = useReadContract({
    address: contracAddress,
    abi: USDe,
    functionName: 'allowance',
    args: [userAddress, spenderAddress],
  })

  return {
    allowance: data,
    isError,
    isLoading,
  }
}