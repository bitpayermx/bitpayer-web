import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
    addresses: Object,
    customer_id: String,
    code: String,
    cancel_url: String,
    created_at: String,
    description: String,
    exchange_rates: Object,
    expires_at: String,
    fees_settled: Boolean,
    coinbase_payment_id: String,
    hosted_url: String,
    local_exchange_rates: Object,
    metadata: Object,
    organization_name: String,
    payment_threshold: Object,
    payments: Array,
    pricing: Object,
    pricing_type: String,
    pwcb_only: Boolean,
    redirect_url: String,
    resource: String,
    support_email: String,
    timeline: Array,
    utxo: Boolean
});

let Payment;

try {
    Payment = mongoose.model("payments");
} catch (err) {
    Payment = mongoose.model("payments", PaymentSchema);
}

export default Payment;
