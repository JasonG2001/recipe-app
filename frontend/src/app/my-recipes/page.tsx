import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "components/card/Card";

import { NavigationBar } from "higher-order-components/NavigationBar";
import { PageContentWrapper } from "higher-order-components/PageContentWrapper";
import { MyRecipesForm } from "./components/MyRecipesForm";

export default function MyRecipes() {
  return (
    <div>
      <NavigationBar />
      <PageContentWrapper>
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Contribute to the community
            </CardTitle>
            <CardDescription className="text-center text-sm">
              Tell us your &apos;secret&apos; recipes
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <MyRecipesForm />
          </CardContent>
        </Card>
      </PageContentWrapper>
    </div>
  );
}
