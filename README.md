# NFT

### Apps & Sites úteis:
- [OpenZeppelin](https://openzeppelin.com/)
- [MetaMask](https://metamask.io/)
- [IPFS](https://docs.ipfs.io/concepts/what-is-ipfs/)
- [Into to Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/)
- [ETH Transactions](https://ethereum.org/en/developers/docs/transactions/)
- [Solidity, Blockchain, and Smart Contract Course](https://www.youtube.com/watch?v=M576WGiDBdQ)
- [Ropsten Ethereum Faucet](https://faucet.ropsten.be/)
- [hardhat](https://hardhat.org/getting-started/)

### Minting an NFT

É o processo de publicar um token único na blockchain. Esse token é uma instancia do Smart Contract.

### Exemplo de metadata ERC721 Metadata Schema

```json
{
	"attributes": [
		{
			"trait_type": "Shape",
			"value": "Circle"
		},
		{
			"trait_type": "Mood",
			"value": "Sad"
		}
	],
	"description": "A sad circle.",
	"image": "https://i.imgur.com/Qkw9N0A.jpeg",
	"name": "Sad Circle"
}
```

### Como armazenar os metadatos
Existem 3 maneiras diferentes de armazenar o NFT

- **on-chain:** extender ERC-721 e armazenar os metadados na blockchain, isso pode ser um processo custoso.
- **IPFS:** IPFS é um sistema distribuido para armazenar e acessar arquivos, websites, aplicação e dados.
- **JSON:** Armazenar em um simples JSON que é retornado a partir de uma API.
O primeiro e segundo método são preferiveis.

### NFT com IPFS
[NFTs with IPFS by the Alchemy team](https://docs.alchemy.com/alchemy/tutorials/how-to-create-an-nft/how-to-mint-a-nft#step-4-configure-the-metadata-for-your-nft-using-ipfs)



