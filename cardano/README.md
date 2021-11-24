# Cardano NFT

- Certifique-se que a rede local está rodando

```bash
 cardano-node run \
   --topology path/to/mainnet-topology.json \
   --database-path path/to/db \
   --socket-path path/to/db/node.socket \
   --host-addr x.x.x.x \
   --port 3001 \
   --config path/to/mainnet-config.json
```

- exportar a variável de ambiente do socket path

export CARDANO_NODE_SOCKET_PATH=/opt/cardano/cnode/sockets/node0.socket

### dados do NFT
```bash
tokenname="NFT1"
tokenamount="1"
fee="0"
output="0"
ipfs_hash="QmXw4s2bAzcuLJxDHKbFo3wzCpHC282mzbkytDhKL6RX3X"
```

### gen payment keys
```bash
cardano-cli address key-gen --verification-key-file payment.vkey --signing-key-file payment.skey
```

### addrs
usaremos a chave de verificação para criar um endereço
```bash
cardano-cli address build --payment-verification-key-file payment.vkey --out-file payment.addr --mainnet
```
para acessar o address usamos
```
address=$(cat payment.addr)
```