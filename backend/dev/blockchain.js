const sha256 = require("sha256"); //importing sha256 hashing
const currentNodeUrl = process.argv[3];
const { v4: uuidv4 } = require("uuid");

// defining blockcahin structure
function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
  this.createNewBlock(100, "0", "0");
  this.currentNodeUrl = currentNodeUrl;
  this.networkNodes = [];
}
Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash,
  };
  this.pendingTransactions = [];
  this.chain.push(newBlock);
  return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

//refactoring createTransaction
Blockchain.prototype.createNewTransaction = function (
  name,
  category,
  candidate,
  voter
) {
  const transactionId = uuidv4().split("-").join("");
  const newTransaction = {
    amount: 1,
    name: name,
    category: category,
    candidate: candidate,
    voter: voter,
    transactionId: transactionId,
  };
  // console.log(transactionId);
  return newTransaction;
};

Blockchain.prototype.addTransactionToPendingTransactions = function (
  transactionObj
) {
  this.pendingTransactions.push(transactionObj);
  return this.getLastBlock()["index"] + 1;
};

Blockchain.prototype.hashBlock = function (
  previousBlockHash,
  currentBlockData,
  nonce
) {
  const dataAsString =
    previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};

Blockchain.prototype.proofOfWork = function (
  previousBlockHash,
  currentBlockData
) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while (hash.substring(0, 4) !== "0000") {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  }
  return nonce;
};

Blockchain.prototype.chainIsValid = function (blockchain) {
  let validChain = true; //flag
  for (var i = 1; i < blockchain.length; i++) {
    const currentBlock = blockchain[i];
    const prevBlock = blockchain[i - 1];

    //error on rehashing
    const blockHash = this.hashBlock(
      prevBlock["hash"],
      {
        transactions: currentBlock["transactions"],
        index: currentBlock["index"],
      },
      currentBlock["nonce"]
    );
    // if (blockHash.substring(0, 4) !== '0000') validChain = false;

    if (currentBlock["previousBlockHash"] !== prevBlock["hash"])
      validChain = false;
  }

  const genesisBlock = blockchain[0];
  const correctNonce = genesisBlock["nonce"] === 100;
  const correctPreviousHash = genesisBlock["previousBlockHash"] === "0";
  const correctHash = genesisBlock["hash"] === "0";
  const correctTransactions = genesisBlock["transactions"] === 0;
  if (
    !correctNonce ||
    !correctPreviousHash ||
    !correctHash ||
    correctTransactions
  )
    validChain = false;

  return validChain;
};

// vote count
Blockchain.prototype.voteCount = function (
  candidateName,
  candidateCid,
  candidateCategory
) {
  const chain = this.chain;
  let votes = 0;
  let candidate = null;
  let name = null;
  let category = null;
  // return chain;
  chain.forEach((block) => {
    const transactions = block.transactions;
    // console.log(transactions);
    transactions.forEach((transaction) => {
      candidate = candidateCid;
      name = candidateName;
      category = candidateCategory;
      if (candidateCid === transaction.candidate) {
        votes = votes + transaction.amount;
      }
    });
  });
  return {
    votes: votes,
    name: name,
    candidate: candidate,
    category: category,
  };
};

// block explorer
Blockchain.prototype.getBlock = function (blockHash) {
  let correctBlock = null;
  this.chain.forEach((block) => {
    if (block.hash === blockHash) correctBlock = block;
  });
  return correctBlock;
};

Blockchain.prototype.getTransaction = function (transactionId) {
  let correctTransaction = null;
  let correctBlock = null;
  this.chain.forEach((block) => {
    block.transactions.forEach((transaction) => {
      if (transaction.transactionId === transactionId) {
        correctTransaction = transaction;
        correctBlock = block;
      }
    });
  });
  return {
    transaction: correctTransaction,
    block: correctBlock,
  };
};

Blockchain.prototype.getAddressData = function (address) {
  const addressTransactions = [];
  this.chain.forEach((block) => {
    block.transactions.forEach((transaction) => {
      if (transaction.sender === address || transaction.recipient === address) {
        addressTransactions.push(transaction);
      }
    });
  });
  let balance = 0;
  addressTransactions.forEach((transaction) => {
    if (transaction.recipient === address) balance += transaction.amount;
    else if (transaction.sender === address) balance -= transaction.amount;
  });
  return {
    addressTransaction: addressTransactions,
    addressBalance: balance,
  };
};

module.exports = Blockchain;
