import { MdCopyright as Copyright } from 'react-icons/md'
import { note, copyrightIcon } from './styles'
import Atila from './atila-logo'

const Footprint = () => (
  <>
    <small css={note}>
      <Copyright css={copyrightIcon} /> Javi - 2021
    </small>
  </>
)

export default Footprint
