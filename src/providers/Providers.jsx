import { CartProvider } from "../contexts/CartContext";
import { ProductsProvider } from "../contexts/ProductsContext";

const BuildProviderTree = (providers) =>
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

const Providers = BuildProviderTree([CartProvider, ProductsProvider]);

export default Providers;