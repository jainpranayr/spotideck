import { Loader, Bar } from '../styles'

const Bars = () => (
  <Loader>
    <div className='bars'>
      <Bar delay='250ms' />
      <Bar delay='715ms' />
      <Bar delay='475ms' />
      <Bar delay='25ms' />
      <Bar delay='190ms' />
    </div>
  </Loader>
)

export default Bars
