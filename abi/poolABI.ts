export const POOL_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address"
      },
      {
        internalType: "address",
        name: "_tokenA",
        type: "address"
      },
      {
        internalType: "address",
        name: "_tokenB",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_weightA",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_weightB",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountA",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountB",
        type: "uint256"
      }
    ],
    name: "FeesWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountA",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountB",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "LiquidityAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountA",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountB",
        type: "uint256"
      }
    ],
    name: "LiquidityRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOut",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "Swapped",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldVault",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newVault",
        type: "address"
      }
    ],
    name: "VaultUpdated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256"
      }
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "feesA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feesB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getLiquidityShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolDetails",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "liquidityShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      }
    ],
    name: "onSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "reserveA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "reserveB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address"
      }
    ],
    name: "setVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenA",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalLiquidityShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "weightA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "weightB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

export const POOL_BYTECODE =
  "608060405234801561000f575f80fd5b5060405161201a38038061201a83398181016040528101906100319190610207565b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff160361009f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610096906102d8565b60405180910390fd5b8460065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550835f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816004819055508060058190555050505050506102f6565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a38261017a565b9050919050565b6101b381610199565b81146101bd575f80fd5b50565b5f815190506101ce816101aa565b92915050565b5f819050919050565b6101e6816101d4565b81146101f0575f80fd5b50565b5f81519050610201816101dd565b92915050565b5f805f805f60a086880312156102205761021f610176565b5b5f61022d888289016101c0565b955050602061023e888289016101c0565b945050604061024f888289016101c0565b9350506060610260888289016101f3565b9250506080610271888289016101f3565b9150509295509295909350565b5f82825260208201905092915050565b7f5661756c7420616464726573732063616e6e6f74206265207a65726f000000005f82015250565b5f6102c2601c8361027e565b91506102cd8261028e565b602082019050919050565b5f6020820190508181035f8301526102ef816102b6565b9050919050565b611d17806103035f395ff3fe608060405234801561000f575f80fd5b506004361061012a575f3560e01c806399c1a8ec116100ab578063c8c0526e1161006f578063c8c0526e14610301578063db8d55f114610331578063dc5fa6c514610350578063f42b68bb1461036e578063fbfa77cf1461038c5761012a565b806399c1a8ec146102575780639c8f9f23146102755780639cd441da146102915780639db4aa04146102ad578063aca34c11146102dd5761012a565b8063476343ee116100f2578063476343ee146101c55780635f64b55b146101cf5780636817031b146101ed57806387cd5b20146102095780638fe9b36f146102275761012a565b80630902f1ac1461012e5780630fc63d101461014d578063147180ab1461016b57806319e36f3b1461018957806321abf58b146101a7575b5f80fd5b6101366103aa565b6040516101449291906114f4565b60405180910390f35b6101556103ba565b604051610162919061155a565b60405180910390f35b6101736103dd565b6040516101809190611573565b60405180910390f35b6101916103e3565b60405161019e9190611573565b60405180910390f35b6101af6103e9565b6040516101bc9190611573565b60405180910390f35b6101cd6103ef565b005b6101d761066b565b6040516101e4919061155a565b60405180910390f35b610207600480360381019061020291906115ba565b610690565b005b61021161084b565b60405161021e9190611573565b60405180910390f35b610241600480360381019061023c919061160f565b610851565b60405161024e9190611573565b60405180910390f35b61025f610de9565b60405161026c9190611573565b60405180910390f35b61028f600480360381019061028a9190611673565b610def565b005b6102ab60048036038101906102a6919061169e565b6110d5565b005b6102c760048036038101906102c291906115ba565b61135d565b6040516102d49190611573565b60405180910390f35b6102e5611372565b6040516102f897969594939291906116dc565b60405180910390f35b61031b600480360381019061031691906115ba565b6113e2565b6040516103289190611573565b60405180910390f35b610339611428565b6040516103479291906114f4565b60405180910390f35b610358611438565b6040516103659190611573565b60405180910390f35b61037661143e565b6040516103839190611573565b60405180910390f35b610394611444565b6040516103a1919061155a565b60405180910390f35b5f80600254600354915091509091565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b60035481565b60085481565b5f60095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490505f8111610472576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610469906117a3565b60405180910390fd5b5f600a548260075461048491906117ee565b61048e919061185c565b90505f600a54836008546104a291906117ee565b6104ac919061185c565b90508160075f8282546104bf919061188c565b925050819055508060085f8282546104d7919061188c565b925050819055505f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016105389291906118bf565b6020604051808303815f875af1158015610554573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610578919061191b565b5060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016105d59291906118bf565b6020604051808303815f875af11580156105f1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610615919061191b565b503373ffffffffffffffffffffffffffffffffffffffff167fdeb5099d7943aa2b4c1142e5d53d2f7636aa8f7bd130ec79816f151572bcdf45838360405161065e9291906114f4565b60405180910390a2505050565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461071f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071690611990565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361078d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610784906119f8565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f483bdedaaf23706a9800ac1af0d852b34927780d79f9d6ba60a80c7cad75ea3960405160405180910390a38060065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600a5481565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d890611990565b60405180910390fd5b5f8211610923576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091a90611a60565b60405180910390fd5b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480156109c9575060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b80610a76575060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148015610a7557505f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b5b610ab5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aac90611ac8565b60405180910390fd5b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610b1157600354610b15565b6002545b90505f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610b7357600254610b77565b6003545b90505f8111610bbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb290611b30565b60405180910390fd5b5f6103e8600386610bcc91906117ee565b610bd6919061185c565b90505f8186610be5919061188c565b90505f8185610bf49190611b4e565b8285610c0091906117ee565b610c0a919061185c565b90505f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1603610cab578660025f828254610c6f9190611b4e565b925050819055508060035f828254610c87919061188c565b925050819055508260075f828254610c9f9190611b4e565b92505081905550610cf4565b8660035f828254610cbc9190611b4e565b925050819055508060025f828254610cd4919061188c565b925050819055508260085f828254610cec9190611b4e565b925050819055505b8773ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8b836040518363ffffffff1660e01b8152600401610d2f9291906118bf565b6020604051808303815f875af1158015610d4b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d6f919061191b565b508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167fa54201e99d8e1488291e015a3af88c7a169bcf4932617ecd9536e1f1ad435110898487604051610dd193929190611b81565b60405180910390a38095505050505050949350505050565b60045481565b8060095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610e6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6690611c00565b60405180910390fd5b5f600a5460025483610e8191906117ee565b610e8b919061185c565b90505f600a5460035484610e9f91906117ee565b610ea9919061185c565b90508260095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254610ef7919061188c565b9250508190555082600a5f828254610f0f919061188c565b925050819055508160025f828254610f27919061188c565b925050819055508060035f828254610f3f919061188c565b925050819055505f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610fa09291906118bf565b6020604051808303815f875af1158015610fbc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fe0919061191b565b5060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161103d9291906118bf565b6020604051808303815f875af1158015611059573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061107d919061191b565b503373ffffffffffffffffffffffffffffffffffffffff167f1dc8bb69df2b8e91fbdcbfcf93d951b3f0000f085a95fe3f7946d6161439245d8484846040516110c893929190611b81565b60405180910390a2505050565b5f821180156110e357505f81115b611122576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111990611c8e565b60405180910390fd5b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161117e93929190611cac565b6020604051808303815f875af115801561119a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111be919061191b565b5060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161121d93929190611cac565b6020604051808303815f875af1158015611239573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061125d919061191b565b505f6112698383611469565b90508060095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546112b79190611b4e565b9250508190555080600a5f8282546112cf9190611b4e565b925050819055508260025f8282546112e79190611b4e565b925050819055508160035f8282546112ff9190611b4e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f64b83944e79c3ce8d4c297411de637c3e102d064677aac0c163976ebdcd6f50e84848460405161135093929190611b81565b60405180910390a2505050565b6009602052805f5260405f205f915090505481565b5f805f805f805f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600254600354600754600854600a54965096509650965096509650965090919293949596565b5f60095f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f80600754600854915091509091565b60025481565b60055481565b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f80600a540361148657818361147f9190611b4e565b90506114d6565b5f600254600a548561149891906117ee565b6114a2919061185c565b90505f600354600a54856114b691906117ee565b6114c0919061185c565b90508082106114cf57806114d1565b815b925050505b92915050565b5f819050919050565b6114ee816114dc565b82525050565b5f6040820190506115075f8301856114e5565b61151460208301846114e5565b9392505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6115448261151b565b9050919050565b6115548161153a565b82525050565b5f60208201905061156d5f83018461154b565b92915050565b5f6020820190506115865f8301846114e5565b92915050565b5f80fd5b6115998161153a565b81146115a3575f80fd5b50565b5f813590506115b481611590565b92915050565b5f602082840312156115cf576115ce61158c565b5b5f6115dc848285016115a6565b91505092915050565b6115ee816114dc565b81146115f8575f80fd5b50565b5f81359050611609816115e5565b92915050565b5f805f80608085870312156116275761162661158c565b5b5f611634878288016115a6565b9450506020611645878288016115a6565b9350506040611656878288016115a6565b9250506060611667878288016115fb565b91505092959194509250565b5f602082840312156116885761168761158c565b5b5f611695848285016115fb565b91505092915050565b5f80604083850312156116b4576116b361158c565b5b5f6116c1858286016115fb565b92505060206116d2858286016115fb565b9150509250929050565b5f60e0820190506116ef5f83018a61154b565b6116fc602083018961154b565b61170960408301886114e5565b61171660608301876114e5565b61172360808301866114e5565b61173060a08301856114e5565b61173d60c08301846114e5565b98975050505050505050565b5f82825260208201905092915050565b7f4e6f206c69717569646974792070726f766964656400000000000000000000005f82015250565b5f61178d601583611749565b915061179882611759565b602082019050919050565b5f6020820190508181035f8301526117ba81611781565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6117f8826114dc565b9150611803836114dc565b9250828202611811816114dc565b91508282048414831517611828576118276117c1565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f611866826114dc565b9150611871836114dc565b9250826118815761188061182f565b5b828204905092915050565b5f611896826114dc565b91506118a1836114dc565b92508282039050818111156118b9576118b86117c1565b5b92915050565b5f6040820190506118d25f83018561154b565b6118df60208301846114e5565b9392505050565b5f8115159050919050565b6118fa816118e6565b8114611904575f80fd5b50565b5f81519050611915816118f1565b92915050565b5f602082840312156119305761192f61158c565b5b5f61193d84828501611907565b91505092915050565b7f4f6e6c79205661756c742063616e2063616c6c000000000000000000000000005f82015250565b5f61197a601383611749565b915061198582611946565b602082019050919050565b5f6020820190508181035f8301526119a78161196e565b9050919050565b7f496e76616c6964205661756c74206164647265737300000000000000000000005f82015250565b5f6119e2601583611749565b91506119ed826119ae565b602082019050919050565b5f6020820190508181035f830152611a0f816119d6565b9050919050565b7f496e76616c696420616d6f756e74496e000000000000000000000000000000005f82015250565b5f611a4a601083611749565b9150611a5582611a16565b602082019050919050565b5f6020820190508181035f830152611a7781611a3e565b9050919050565b7f496e76616c696420746f6b656e730000000000000000000000000000000000005f82015250565b5f611ab2600e83611749565b9150611abd82611a7e565b602082019050919050565b5f6020820190508181035f830152611adf81611aa6565b9050919050565b7f496e73756666696369656e7420726573657276654f75740000000000000000005f82015250565b5f611b1a601783611749565b9150611b2582611ae6565b602082019050919050565b5f6020820190508181035f830152611b4781611b0e565b9050919050565b5f611b58826114dc565b9150611b63836114dc565b9250828201905080821115611b7b57611b7a6117c1565b5b92915050565b5f606082019050611b945f8301866114e5565b611ba160208301856114e5565b611bae60408301846114e5565b949350505050565b7f4e6f7420656e6f756768207368617265730000000000000000000000000000005f82015250565b5f611bea601183611749565b9150611bf582611bb6565b602082019050919050565b5f6020820190508181035f830152611c1781611bde565b9050919050565b7f416d6f756e7473206d7573742062652067726561746572207468616e207a65725f8201527f6f00000000000000000000000000000000000000000000000000000000000000602082015250565b5f611c78602183611749565b9150611c8382611c1e565b604082019050919050565b5f6020820190508181035f830152611ca581611c6c565b9050919050565b5f606082019050611cbf5f83018661154b565b611ccc602083018561154b565b611cd960408301846114e5565b94935050505056fea2646970667358221220a256e6fa01b503738191a94dc2084a7578f59c6a5bc275a873b837932e3a738164736f6c634300081a0033";