import { CartProvider } from "../contexts/CartContext";
import { ProductsProvider } from "../contexts/ProductsContext";

const Build_Provider_Tree = (providers) =>
  providers.reduceRight(
    (AccProvider, CurrentProvider) =>
      ({ children }) =>
        (
          <CurrentProvider>
            <AccProvider>{children}</AccProvider>
          </CurrentProvider>
        ),
    ({ children }) => <>{children}</>
  );

const Providers = Build_Provider_Tree([CartProvider, ProductsProvider]);

export default Providers;