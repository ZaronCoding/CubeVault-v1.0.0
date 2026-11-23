import { randomScrambleForEvent } from "cubing/scramble"

export default async function handler(req, res) {
  try {
    const event = req.query.event || "333"
    const s = await randomScrambleForEvent(event)
    res.status(200).json({ scramble: s.toString() })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
