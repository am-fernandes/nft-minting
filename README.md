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
- [How make a NFT](https://www.freecodecamp.org/news/how-to-make-an-nft/)
- [How to export an account private key in MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key)
- [NFT tokens in your MetaMask wallet](https://metamask.zendesk.com/hc/en-us/articles/360058238591-NFT-tokens-in-your-MetaMask-wallet)
- [SMART CONTRACT LANGUAGES](https://ethereum.org/en/developers/docs/smart-contracts/languages/)
- [ethers](https://docs.ethers.io/v5/)
- [Compile contracts](https://hardhat.org/guides/compile-contracts.html)
- [NFT Eth tutorial](https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/)
- [Pinata Cloud](https://www.pinata.cloud/)
- [Arweave](https://www.arweave.org/)
- [Faucet Ropsten](https://faucet.ropsten.be/)
- [Colored Coins](https://en.bitcoin.it/wiki/Colored_Coins)
- [ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)

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
- **JSON:** Armazenar em um simples JSON que é retornado a partir de uma API. **(CASO A API SAIA DO AR A ARTE É DANIFICADA)**

**O primeiro e segundo método são preferiveis.**

### NFT com IPFS
[NFTs with IPFS by the Alchemy team](https://docs.alchemy.com/alchemy/tutorials/how-to-create-an-nft/how-to-mint-a-nft#step-4-configure-the-metadata-for-your-nft-using-ipfs)


### Como criar NFT
- Compilar:
```bash 
npx hardhat compile
```

- Deploy:
```bash
node ./scripts/deploy.js
```

- Mint
```bash
node ./scripts/mint.js
```

### NFT na rede Solana (SOL)
- [Metaplex](https://docs.metaplex.com/create-store/installation)
- [Sol Faucet](https://solfaucet.com/)
- [Phantom Wallet](https://phantom.app/)


**Maximum Supply**: allows you to choose between having a single NFT or multiple copies (prints) from this master edition asset. The main difference between Master Edition and prints is that each print is a numbered edition created from a master edition.

### NFT na rede Binance Smart Chain (BSC)
- [Deploy NFT in BSC](https://docs.binance.org/smart-chain/developer/ERC721.html)
- [Truffle](https://www.trufflesuite.com/docs/truffle/reference/truffle-commands#develop)
- [BNB Faucet](https://testnet.binance.org/faucet-smart)

### NFT na rede Polkadot (DOT)
- [Polkadot Whitepaper](https://polkadot.network/PolkaDotPaper.pdf)
- [NTFs 2.0](https://wiki.polkadot.network/docs/learn/learn-nft#nfts-20-nfts-in-polkadot-and-kusama)
- [Unique Network, an NFT-specific Blockchain](https://unique.network/)
- [RMRK](https://www.rmrk.app/)
- [Substrate](https://substrate.io/)
- [Parachains in Polkadot](https://wiki.polkadot.network/docs/learn-parachains)
- [Parathreads](https://wiki.polkadot.network/docs/learn-parathreads)
- [XCMP](https://research.web3.foundation/en/latest/polkadot/XCMP/index.html)