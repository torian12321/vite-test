import { ResponsiveDrawer } from './ui/Layout'
import { FormDemo } from './ui/FormDemo'
import { CodeExample } from './ui/CodeExample'
import { useAppSelector } from './store/actions'
import { getFieldsList } from './store/selectors/fields.selectors'
import { getDisplayMode } from './store/selectors/settings.selectors'
import { MODES } from './store/slices/settings.slice'
import './App.css'

const isEmpty = (obj: object): boolean =>
  Object.keys(obj).length === 0 && obj.constructor === Object

const clean = (obj: object[]): object[] =>
  obj.map((o) =>
    Object.entries(o).reduce(
      // eslint-disable-next-line
      // @ts-ignore
      (a, [k, v]) => (v == '' || isEmpty(v) ? a : ((a[k] = v), a)),
      {},
    ),
  )

const App = () => {
  const displayMode = useAppSelector(getDisplayMode)
  const fields = clean(useAppSelector(getFieldsList))

  return (
    <ResponsiveDrawer>
      {displayMode === MODES.VISUAL ? (
        <FormDemo />
      ) : (
        <CodeExample obj={{ fields }} />
      )}
    </ResponsiveDrawer>
  )
}

export default App
