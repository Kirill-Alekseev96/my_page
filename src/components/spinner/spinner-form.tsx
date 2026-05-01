import { FidgetSpinner} from 'react-loader-spinner'

export function Example() {
  return (
    <FidgetSpinner
        visible={true}
        height="50"
        width="50"
        backgroundColor="var(--color-accent)"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
    />
  )
}