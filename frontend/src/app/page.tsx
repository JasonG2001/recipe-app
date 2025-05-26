import { Card, CardContent, CardHeader, CardTitle } from "components/card/Card";
import { IMAGE_URL } from "constants/image";
import { ImageWrapper } from "higher-order-components/ImageWrapper";
import { NavigationBar } from "higher-order-components/NavigationBar";
import { PageContentWrapper } from "higher-order-components/PageContentWrapper";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <PageContentWrapper>
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">We love food</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <ImageWrapper
              url={IMAGE_URL.burgerAndChips.url}
              alt={IMAGE_URL.burgerAndChips.alt}
            />
            <ImageWrapper
              url={IMAGE_URL.quinoaSalad.url}
              alt={IMAGE_URL.quinoaSalad.alt}
            />
            <ImageWrapper
              url={IMAGE_URL.pancakes.url}
              alt={IMAGE_URL.pancakes.alt}
            />
            <ImageWrapper
              url={IMAGE_URL.fruitSalad.url}
              alt={IMAGE_URL.fruitSalad.alt}
            />
          </CardContent>
        </Card>
      </PageContentWrapper>
    </div>
  );
}
