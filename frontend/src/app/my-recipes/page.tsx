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
import { Separator } from "components/separator/Separator";

export default function MyRecipes() {
  return (
    <div>
      <NavigationBar />
      <PageContentWrapper className="w-1/2">
        <Card className="px-10">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Contribute to the community
            </CardTitle>
            <CardDescription className="text-center text-sm">
              Tell us your &apos;secret&apos; recipes
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent>
            <MyRecipesForm />
          </CardContent>
        </Card>
      </PageContentWrapper>
    </div>
  );
}
