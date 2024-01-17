import axiosClient from "../axiosClient";

interface create {
  transaction_details: {
    gross_amount: number | undefined;
    order_id: string | undefined;
  };
}

const Transaction = {
  create({ transaction_details }: create) {
    return axiosClient.post("", transaction_details);
  },
};

export default Transaction;
