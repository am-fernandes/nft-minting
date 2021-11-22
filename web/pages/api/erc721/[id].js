// web/pages/api/erc721/[id].js

const metadata = {
    attributes: [
      {
        trait_type: "Shape",
        value: "Circle",
      },
      {
        trait_type: "Mood",
        value: "Sad",
      },
    ],
    description: "A sad circle.",
    image: "https://i.imgur.com/Qkw9N0A.jpeg",
    name: "Sad Circle",
};

export default function handler(req, res) {
  res.status(200).json(metadata[req.query.id] || {});
}