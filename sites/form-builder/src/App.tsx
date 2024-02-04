import { ResponsiveDrawer } from "./ui/Layout";
import { FormDemo } from "./ui/FormDemo";
import { CodeExample } from "./ui/CodeExample";
import { useAppSelector } from "./store/actions";
import { getFieldsList } from "./store/selectors/fields.selectors";
import { getDisplayMode } from "./store/selectors/settings.selectors";
import { MODES } from "./store/slices/settings.slice";
import "./App.css";

const App = () => {
  const displayMode = useAppSelector(getDisplayMode);
  const fields = useAppSelector(getFieldsList);

  return (
    <ResponsiveDrawer>
      {displayMode === MODES.VISUAL ? (
        <FormDemo />
      ) : (
        <CodeExample obj={{ fields }} />
      )}
    </ResponsiveDrawer>
  );
};

export default App;
