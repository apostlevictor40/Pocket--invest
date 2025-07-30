export default async function handler(req, res) {
  if (req.method === "POST") {
    const event = req.body
    if (event.event === "charge.success") {
      const email = event.data.customer.email
      const amount = event.data.amount / 100
      console.log("Payment from", email, "Amount:", amount)
    }
    return res.status(200).send("OK")
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
    }
