const { expect } = require('chai')
const { getTransferInstances } = require('../src/common/dao/transferDao')
let pendingTransfers = null
describe('Transfer Cron test suit',async()=>{
    it('Step 1 find all pending transfers with isBlockchainUpdated and onDemand false',async()=>{
        const requests1 = await getTransferInstances({isBlockChainUpdated:false,onDemand:false})
        expect(requests1.length).to.be.eq(0)
    })

    it('Step 2 find all pending transfers with isBlockchainUpdated false',async()=>{
        pendingTransfers = await getTransferInstances({isBlockChainUpdated:false})
        expect(pendingTransfers.length).to.be.eq(1)
    })

    it('Step 3 find all pending transfers with isBlockchainUpdated false and blockchainName palm',async()=>{
        const requests2 = await getTransferInstances({isBlockChainUpdated:false,blockchainName:'palm'})
        expect(requests2.length).to.be.eq(pendingTransfers.length)
        expect(pendingTransfers[0]._id.toString()).to.be.equal(requests2[0]._id.toString())
    })
})