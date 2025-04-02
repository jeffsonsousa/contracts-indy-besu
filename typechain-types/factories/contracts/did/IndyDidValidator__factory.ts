/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  IndyDidValidator,
  IndyDidValidatorInterface,
} from "../../../contracts/did/IndyDidValidator";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "AuthenticationKeyNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "did",
        type: "string",
      },
    ],
    name: "AuthenticationKeyRequired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "did",
        type: "string",
      },
    ],
    name: "IncorrectDid",
    type: "error",
  },
  {
    inputs: [],
    name: "PackedPtrLen__LenOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PackedPtrLen__PtrOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "Slice__OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "did",
        type: "string",
      },
    ],
    name: "validateDid",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string[]",
            name: "context",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "controller",
            type: "string[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                internalType: "string",
                name: "verificationMethodType",
                type: "string",
              },
              {
                internalType: "string",
                name: "controller",
                type: "string",
              },
              {
                internalType: "string",
                name: "publicKeyJwk",
                type: "string",
              },
              {
                internalType: "string",
                name: "publicKeyMultibase",
                type: "string",
              },
            ],
            internalType: "struct VerificationMethod[]",
            name: "verificationMethod",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "authentication",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "assertionMethod",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "capabilityInvocation",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "capabilityDelegation",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "id",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "verificationMethodType",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "controller",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyJwk",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "publicKeyMultibase",
                    type: "string",
                  },
                ],
                internalType: "struct VerificationMethod",
                name: "verificationMethod",
                type: "tuple",
              },
            ],
            internalType: "struct VerificationRelationship[]",
            name: "keyAgreement",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "id",
                type: "string",
              },
              {
                internalType: "string",
                name: "serviceType",
                type: "string",
              },
              {
                internalType: "string",
                name: "serviceEndpoint",
                type: "string",
              },
              {
                internalType: "string[]",
                name: "accept",
                type: "string[]",
              },
              {
                internalType: "string[]",
                name: "routingKeys",
                type: "string[]",
              },
            ],
            internalType: "struct Service[]",
            name: "service",
            type: "tuple[]",
          },
          {
            internalType: "string[]",
            name: "alsoKnownAs",
            type: "string[]",
          },
        ],
        internalType: "struct DidDocument",
        name: "didDocument",
        type: "tuple",
      },
    ],
    name: "validateVerificationKey",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x611fee610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80635fbac08e14610045578063d84a06e114610061575b600080fd5b61005f600480360381019061005a919061152f565b61007d565b005b61007b60048036038101906100769190611e03565b610146565b005b60006100888261027d565b90506100978160000151610483565b6100d857816040517f30b3c7760000000000000000000000000000000000000000000000000000000081526004016100cf9190611ecb565b60405180910390fd5b60006100e78260200151610597565b9050601581141580156100fb575060168114155b156101415781602001516040517f30b3c7760000000000000000000000000000000000000000000000000000000081526004016101389190611ecb565b60405180910390fd5b505050565b6000816080015151036101945780602001516040517f403315e600000000000000000000000000000000000000000000000000000000815260040161018b9190611ecb565b60405180910390fd5b60005b816080015151811015610279576101d3826080015182815181106101be576101bd611eed565b5b602002602001015160200151600001516105a2565b1561026c576102088260600151836080015183815181106101f7576101f6611eed565b5b6020026020010151600001516105b6565b61026b578160800151818151811061022357610222611eed565b5b6020026020010151600001516040517f726c1bf20000000000000000000000000000000000000000000000000000000081526004016102629190611ecb565b60405180910390fd5b5b8080600101915050610197565b5050565b6102856113bb565b60006102908361061c565b905060006102d26040518060400160405280600181526020017f3a0000000000000000000000000000000000000000000000000000000000000081525061061c565b90506000806102ea838561062e90919063ffffffff16565b809650819450829350505050801580610350575061034e61033f6040518060400160405280600381526020017f646964000000000000000000000000000000000000000000000000000000000081525061061c565b836106bd90919063ffffffff16565b155b1561039257856040517f30b3c7760000000000000000000000000000000000000000000000000000000081526004016103899190611ecb565b60405180910390fd5b6103a5838561062e90919063ffffffff16565b809650819450829350505050806103f357856040517f30b3c7760000000000000000000000000000000000000000000000000000000081526004016103ea9190611ecb565b60405180910390fd5b6103fb6113bb565b610404836106ea565b816000018190525061045c61044d6040518060400160405280600181526020017f3a0000000000000000000000000000000000000000000000000000000000000081525061061c565b8661070490919063ffffffff16565b90915090508093505061046e836106ea565b81602001819052508095505050505050919050565b60008061048f8361061c565b90506104e16104d26040518060400160405280600481526020017f696e64790000000000000000000000000000000000000000000000000000000081525061061c565b826106bd90919063ffffffff16565b8061053857506105376105286040518060400160405280600581526020017f696e64793200000000000000000000000000000000000000000000000000000081525061061c565b826106bd90919063ffffffff16565b5b8061058f575061058e61057f6040518060400160405280600381526020017f736f76000000000000000000000000000000000000000000000000000000000081525061061c565b826106bd90919063ffffffff16565b5b915050919050565b600081519050919050565b6000806105ae83610597565b149050919050565b6000805b8351811015610610576105f4838583815181106105da576105d9611eed565b5b60200260200101516000015161079290919063ffffffff16565b15610603576001915050610616565b80806001019150506105ba565b50600090505b92915050565b6000610627826107bf565b9050919050565b600080600080610657610640866107db565b610649886107db565b6107e590919063ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610691576000866000935093509350506106b6565b6106ae8161069e876109d0565b886109ee9092919063ffffffff16565b935093509350505b9250925092565b60006106e26106cb836107db565b6106d4856107db565b610a7990919063ffffffff16565b905092915050565b60606106fd6106f8836107db565b610ac5565b9050919050565b60008060008061072d610716866107db565b61071f886107db565b610b4790919063ffffffff16565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810361076657600080879350935093505061078b565b61078381610773876109d0565b886109ee9092919063ffffffff16565b935093509350505b9250925092565b60006107b76107a08361061c565b6107a98561061c565b6106bd90919063ffffffff16565b905092915050565b6000806020830190506107d3818451610d21565b915050919050565b6000819050919050565b6000806107f184610d35565b905060006107fe84610d35565b905060008103610813576000925050506109ca565b600082148061082157508181115b15610850577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff925050506109ca565b600061085b86610d53565b9050600061086886610d53565b9050600061087582610d61565b90505b6001156109a157600061088c848784610d6f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81036108e3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96505050505050506109ca565b8084019350808603955085851115610923577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96505050505050506109ca565b61092e848487610eab565b156109545761093c89610d53565b846109479190611f55565b96505050505050506109ca565b6001860361098a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96505050505050506109ca565b838060010194505085806001900396505050610878565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff955050505050505b92915050565b60006fffffffffffffffffffffffffffffffff801682169050919050565b6000806000806109fd87610ebd565b90506000610a0a886109d0565b90506000868801905081811115610a4d576040517f65f4e9df00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a578389610ecb565b9450610a67818401828403610ecb565b93506001955050505093509350939050565b600080610a8584610d35565b9050610a9083610d35565b8114610aa0576000915050610abf565b610abb610aac85610d53565b610ab585610d53565b83610eab565b9150505b92915050565b6060610ad082610d35565b67ffffffffffffffff811115610ae957610ae8611404565b5b6040519080825280601f01601f191660200182016040528015610b1b5781602001600182028036833780820191505090505b5090506000602082019050610b4181610b3385610d53565b610b3c86610d35565b610ef0565b50919050565b600080610b5384610d35565b90506000610b6084610d35565b905060008103610b7557600092505050610d1b565b6000821480610b8357508181115b15610bb2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92505050610d1b565b6000610bbd86610d53565b90506000610bca86610d53565b90506000610bd787610efe565b905060006001850390505b600115610cf1576000610bf6858885610f64565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610c4e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff975050505050505050610d1b565b80821115610c85577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff975050505050505050610d1b565b60008282039050610c998187018689610eab565b15610cae578098505050505050505050610d1b565b6000821115610cc1578197505050610be2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff98505050505050505050610d1b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96505050505050505b92915050565b6000610d2d8383611073565b905092915050565b60006fffffffffffffffffffffffffffffffff801682169050919050565b6000608082901c9050919050565b6000815160001a9050919050565b600060208311610d8b57610d84848484611087565b9050610ea4565b600084905060008060208681610da457610da3611f89565b5b069150818603870190506000610db9866111f2565b90505b81881015610e045760008189511890506000610dd782611234565b14610df857848903610deb8a60208a611087565b0195505050505050610ea4565b60208901985050610dbc565b60008303610e38577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff945050505050610ea4565b610e43828488611087565b94507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8503610e98577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff945050505050610ea4565b83820385019450505050505b9392505050565b60008183208285201490509392505050565b6000608082901c9050919050565b60006fffffffffffffffffffffffffffffffff80168216608084901b17905092915050565b8083828460045afa50505050565b600080610f0a83610d35565b905060008103610f46576040517f65f4e9df00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f5c60018203610f5685610d53565b01610d61565b915050919050565b600060208311610f8057610f79848484611285565b905061106c565b60008060208581610f9457610f93611f89565b5b069150848601905060008214610ff05781810390506000610fb6828487611285565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610fee578682038101935050505061106c565b505b6000610ffb856111f2565b90505b86821115611045576020820391506000818351189050600061101f82611234565b1461103f5787830361103384602089611285565b0194505050505061106c565b50610ffe565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff93505050505b9392505050565b600061107f83836112fe565b905092915050565b600080845190506000602085111561109e57602094505b601285106111445760006110b1856111f2565b8318905060006110d46fffffffffffffffffffffffffffffffff80168317611234565b0361110c5760109150601a86106111075760006110fc67ffffffffffffffff80168317611234565b0361110657601891505b5b61113e565b600061113377ffffffffffffffffffffffffffffffffffffffffffffffff80168317611234565b0361113d57600891505b5b5061118f565b600a851061118e576000611157856111f2565b83189050600061118277ffffffffffffffffffffffffffffffffffffffffffffffff80168317611234565b0361118c57600891505b505b5b5b848110156111c557600082821a90508460ff168160ff16036111b7578193505050506111eb565b508080600101915050611190565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff925050505b9392505050565b600060ff80167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8161122757611226611f89565b5b048260ff16029050919050565b60007f808080808080808080808080808080808080808080808080808080808080808082197f0101010101010101010101010101010101010101010101010101010101010101840316169050919050565b6000602083111561129557602092505b6000845190505b60008411156112d257838060019003945050600081851a90508360ff168160ff16036112cc5784925050506112f7565b5061129c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9150505b9392505050565b60006fffffffffffffffffffffffffffffffff801683111561134c576040517ffee7506f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff8016821115611398576040517f3b6b098d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff80168216608084901b17905092915050565b604051806040016040528060608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61143c826113f3565b810181811067ffffffffffffffff8211171561145b5761145a611404565b5b80604052505050565b600061146e6113d5565b905061147a8282611433565b919050565b600067ffffffffffffffff82111561149a57611499611404565b5b6114a3826113f3565b9050602081019050919050565b82818337600083830152505050565b60006114d26114cd8461147f565b611464565b9050828152602081018484840111156114ee576114ed6113ee565b5b6114f98482856114b0565b509392505050565b600082601f830112611516576115156113e9565b5b81356115268482602086016114bf565b91505092915050565b600060208284031215611545576115446113df565b5b600082013567ffffffffffffffff811115611563576115626113e4565b5b61156f84828501611501565b91505092915050565b600080fd5b600080fd5b600067ffffffffffffffff82111561159d5761159c611404565b5b602082029050602081019050919050565b600080fd5b60006115c66115c184611582565b611464565b905080838252602082019050602084028301858111156115e9576115e86115ae565b5b835b8181101561163057803567ffffffffffffffff81111561160e5761160d6113e9565b5b80860161161b8982611501565b855260208501945050506020810190506115eb565b5050509392505050565b600082601f83011261164f5761164e6113e9565b5b813561165f8482602086016115b3565b91505092915050565b600067ffffffffffffffff82111561168357611682611404565b5b602082029050602081019050919050565b600060a082840312156116aa576116a9611578565b5b6116b460a0611464565b9050600082013567ffffffffffffffff8111156116d4576116d361157d565b5b6116e084828501611501565b600083015250602082013567ffffffffffffffff8111156117045761170361157d565b5b61171084828501611501565b602083015250604082013567ffffffffffffffff8111156117345761173361157d565b5b61174084828501611501565b604083015250606082013567ffffffffffffffff8111156117645761176361157d565b5b61177084828501611501565b606083015250608082013567ffffffffffffffff8111156117945761179361157d565b5b6117a084828501611501565b60808301525092915050565b60006117bf6117ba84611668565b611464565b905080838252602082019050602084028301858111156117e2576117e16115ae565b5b835b8181101561182957803567ffffffffffffffff811115611807576118066113e9565b5b8086016118148982611694565b855260208501945050506020810190506117e4565b5050509392505050565b600082601f830112611848576118476113e9565b5b81356118588482602086016117ac565b91505092915050565b600067ffffffffffffffff82111561187c5761187b611404565b5b602082029050602081019050919050565b6000604082840312156118a3576118a2611578565b5b6118ad6040611464565b9050600082013567ffffffffffffffff8111156118cd576118cc61157d565b5b6118d984828501611501565b600083015250602082013567ffffffffffffffff8111156118fd576118fc61157d565b5b61190984828501611694565b60208301525092915050565b600061192861192384611861565b611464565b9050808382526020820190506020840283018581111561194b5761194a6115ae565b5b835b8181101561199257803567ffffffffffffffff8111156119705761196f6113e9565b5b80860161197d898261188d565b8552602085019450505060208101905061194d565b5050509392505050565b600082601f8301126119b1576119b06113e9565b5b81356119c1848260208601611915565b91505092915050565b600067ffffffffffffffff8211156119e5576119e4611404565b5b602082029050602081019050919050565b600060a08284031215611a0c57611a0b611578565b5b611a1660a0611464565b9050600082013567ffffffffffffffff811115611a3657611a3561157d565b5b611a4284828501611501565b600083015250602082013567ffffffffffffffff811115611a6657611a6561157d565b5b611a7284828501611501565b602083015250604082013567ffffffffffffffff811115611a9657611a9561157d565b5b611aa284828501611501565b604083015250606082013567ffffffffffffffff811115611ac657611ac561157d565b5b611ad28482850161163a565b606083015250608082013567ffffffffffffffff811115611af657611af561157d565b5b611b028482850161163a565b60808301525092915050565b6000611b21611b1c846119ca565b611464565b90508083825260208201905060208402830185811115611b4457611b436115ae565b5b835b81811015611b8b57803567ffffffffffffffff811115611b6957611b686113e9565b5b808601611b7689826119f6565b85526020850194505050602081019050611b46565b5050509392505050565b600082601f830112611baa57611ba96113e9565b5b8135611bba848260208601611b0e565b91505092915050565b60006101608284031215611bda57611bd9611578565b5b611be5610160611464565b9050600082013567ffffffffffffffff811115611c0557611c0461157d565b5b611c118482850161163a565b600083015250602082013567ffffffffffffffff811115611c3557611c3461157d565b5b611c4184828501611501565b602083015250604082013567ffffffffffffffff811115611c6557611c6461157d565b5b611c718482850161163a565b604083015250606082013567ffffffffffffffff811115611c9557611c9461157d565b5b611ca184828501611833565b606083015250608082013567ffffffffffffffff811115611cc557611cc461157d565b5b611cd18482850161199c565b60808301525060a082013567ffffffffffffffff811115611cf557611cf461157d565b5b611d018482850161199c565b60a08301525060c082013567ffffffffffffffff811115611d2557611d2461157d565b5b611d318482850161199c565b60c08301525060e082013567ffffffffffffffff811115611d5557611d5461157d565b5b611d618482850161199c565b60e08301525061010082013567ffffffffffffffff811115611d8657611d8561157d565b5b611d928482850161199c565b6101008301525061012082013567ffffffffffffffff811115611db857611db761157d565b5b611dc484828501611b95565b6101208301525061014082013567ffffffffffffffff811115611dea57611de961157d565b5b611df68482850161163a565b6101408301525092915050565b600060208284031215611e1957611e186113df565b5b600082013567ffffffffffffffff811115611e3757611e366113e4565b5b611e4384828501611bc3565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e86578082015181840152602081019050611e6b565b60008484015250505050565b6000611e9d82611e4c565b611ea78185611e57565b9350611eb7818560208601611e68565b611ec0816113f3565b840191505092915050565b60006020820190508181036000830152611ee58184611e92565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f6082611f1c565b9150611f6b83611f1c565b9250828203905081811115611f8357611f82611f26565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea26469706673582212202b67e7fbfd55aa2b1d236abf2098d6872ba613ac2d3b39e81701db2e929e510764736f6c63430008180033";

type IndyDidValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IndyDidValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IndyDidValidator__factory extends ContractFactory {
  constructor(...args: IndyDidValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      IndyDidValidator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): IndyDidValidator__factory {
    return super.connect(runner) as IndyDidValidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IndyDidValidatorInterface {
    return new Interface(_abi) as IndyDidValidatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IndyDidValidator {
    return new Contract(address, _abi, runner) as unknown as IndyDidValidator;
  }
}
