/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace SubscriptionManager {
  export type PlanStruct = {
    planKey: PromiseOrValue<BigNumberish>;
    amountPerMonth: PromiseOrValue<BigNumberish>;
    receiverWallet: PromiseOrValue<BigNumberish>;
    maxMember: PromiseOrValue<BigNumberish>;
  };

  export type PlanStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    planKey: BigNumber;
    amountPerMonth: BigNumber;
    receiverWallet: BigNumber;
    maxMember: BigNumber;
  };

  export type PaymentStruct = {
    planKey: PromiseOrValue<BigNumberish>;
    payer: PromiseOrValue<string>;
    payerWallet: PromiseOrValue<BigNumberish>;
    startTime: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<boolean>;
    memberCount: PromiseOrValue<BigNumberish>;
  };

  export type PaymentStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber
  ] & {
    planKey: BigNumber;
    payer: string;
    payerWallet: BigNumber;
    startTime: BigNumber;
    status: boolean;
    memberCount: BigNumber;
  };
}

export interface SubscriptionManagerInterface extends utils.Interface {
  functions: {
    "addMembers(uint256,address[])": FunctionFragment;
    "createPlan((uint256,uint256,uint256,uint256))": FunctionFragment;
    "getAllPayments()": FunctionFragment;
    "getAllPlans()": FunctionFragment;
    "getMemberStatus(uint256,address)": FunctionFragment;
    "memberToPayer(address)": FunctionFragment;
    "members(address,uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "paymentKeys(uint256)": FunctionFragment;
    "payments(address,uint256)": FunctionFragment;
    "planKeys(uint256)": FunctionFragment;
    "plans(uint256)": FunctionFragment;
    "removeMembers(uint256,address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "saveStatus(address,uint256,bool)": FunctionFragment;
    "startPayment(uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMembers"
      | "createPlan"
      | "getAllPayments"
      | "getAllPlans"
      | "getMemberStatus"
      | "memberToPayer"
      | "members"
      | "owner"
      | "paymentKeys"
      | "payments"
      | "planKeys"
      | "plans"
      | "removeMembers"
      | "renounceOwnership"
      | "saveStatus"
      | "startPayment"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMembers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createPlan",
    values: [SubscriptionManager.PlanStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPayments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPlans",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMemberStatus",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "memberToPayer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "members",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paymentKeys",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "payments",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "planKeys",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "plans",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMembers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "saveStatus",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "startPayment",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addMembers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createPlan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllPayments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPlans",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMemberStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "memberToPayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "members", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymentKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payments", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "planKeys", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "plans", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saveStatus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SubscriptionManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SubscriptionManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addMembers(
      _planKey: PromiseOrValue<BigNumberish>,
      _users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createPlan(
      plan: SubscriptionManager.PlanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllPayments(
      overrides?: CallOverrides
    ): Promise<[SubscriptionManager.PaymentStructOutput[]]>;

    getAllPlans(
      overrides?: CallOverrides
    ): Promise<[SubscriptionManager.PlanStructOutput[]]>;

    getMemberStatus(
      _planKey: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    memberToPayer(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    members(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paymentKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { planKey: BigNumber; payer: string }>;

    payments(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, boolean, BigNumber] & {
        planKey: BigNumber;
        payer: string;
        payerWallet: BigNumber;
        startTime: BigNumber;
        status: boolean;
        memberCount: BigNumber;
      }
    >;

    planKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    plans(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        planKey: BigNumber;
        amountPerMonth: BigNumber;
        receiverWallet: BigNumber;
        maxMember: BigNumber;
      }
    >;

    removeMembers(
      _planKey: PromiseOrValue<BigNumberish>,
      _users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    saveStatus(
      _payer: PromiseOrValue<string>,
      _planKey: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startPayment(
      _planKey: PromiseOrValue<BigNumberish>,
      _payerWallet: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addMembers(
    _planKey: PromiseOrValue<BigNumberish>,
    _users: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createPlan(
    plan: SubscriptionManager.PlanStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllPayments(
    overrides?: CallOverrides
  ): Promise<SubscriptionManager.PaymentStructOutput[]>;

  getAllPlans(
    overrides?: CallOverrides
  ): Promise<SubscriptionManager.PlanStructOutput[]>;

  getMemberStatus(
    _planKey: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  memberToPayer(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  members(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  paymentKeys(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { planKey: BigNumber; payer: string }>;

  payments(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, boolean, BigNumber] & {
      planKey: BigNumber;
      payer: string;
      payerWallet: BigNumber;
      startTime: BigNumber;
      status: boolean;
      memberCount: BigNumber;
    }
  >;

  planKeys(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  plans(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      planKey: BigNumber;
      amountPerMonth: BigNumber;
      receiverWallet: BigNumber;
      maxMember: BigNumber;
    }
  >;

  removeMembers(
    _planKey: PromiseOrValue<BigNumberish>,
    _users: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  saveStatus(
    _payer: PromiseOrValue<string>,
    _planKey: PromiseOrValue<BigNumberish>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startPayment(
    _planKey: PromiseOrValue<BigNumberish>,
    _payerWallet: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMembers(
      _planKey: PromiseOrValue<BigNumberish>,
      _users: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    createPlan(
      plan: SubscriptionManager.PlanStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllPayments(
      overrides?: CallOverrides
    ): Promise<SubscriptionManager.PaymentStructOutput[]>;

    getAllPlans(
      overrides?: CallOverrides
    ): Promise<SubscriptionManager.PlanStructOutput[]>;

    getMemberStatus(
      _planKey: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    memberToPayer(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    members(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    paymentKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { planKey: BigNumber; payer: string }>;

    payments(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, boolean, BigNumber] & {
        planKey: BigNumber;
        payer: string;
        payerWallet: BigNumber;
        startTime: BigNumber;
        status: boolean;
        memberCount: BigNumber;
      }
    >;

    planKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    plans(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        planKey: BigNumber;
        amountPerMonth: BigNumber;
        receiverWallet: BigNumber;
        maxMember: BigNumber;
      }
    >;

    removeMembers(
      _planKey: PromiseOrValue<BigNumberish>,
      _users: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    saveStatus(
      _payer: PromiseOrValue<string>,
      _planKey: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    startPayment(
      _planKey: PromiseOrValue<BigNumberish>,
      _payerWallet: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addMembers(
      _planKey: PromiseOrValue<BigNumberish>,
      _users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createPlan(
      plan: SubscriptionManager.PlanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllPayments(overrides?: CallOverrides): Promise<BigNumber>;

    getAllPlans(overrides?: CallOverrides): Promise<BigNumber>;

    getMemberStatus(
      _planKey: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    memberToPayer(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    members(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paymentKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payments(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    planKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    plans(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMembers(
      _planKey: PromiseOrValue<BigNumberish>,
      _users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    saveStatus(
      _payer: PromiseOrValue<string>,
      _planKey: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startPayment(
      _planKey: PromiseOrValue<BigNumberish>,
      _payerWallet: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMembers(
      _planKey: PromiseOrValue<BigNumberish>,
      _users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createPlan(
      plan: SubscriptionManager.PlanStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllPayments(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllPlans(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMemberStatus(
      _planKey: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    memberToPayer(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    members(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paymentKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payments(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    planKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    plans(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMembers(
      _planKey: PromiseOrValue<BigNumberish>,
      _users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    saveStatus(
      _payer: PromiseOrValue<string>,
      _planKey: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startPayment(
      _planKey: PromiseOrValue<BigNumberish>,
      _payerWallet: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}