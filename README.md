# DESIGN PATTERN
* This project was created with SOLID in mind. 
* I've used the pattern of MVC . Model View Controller.
* Where [``M``]VC could reffer to the different Interfaces to structure the product types, like Shoes, Watches, T-Shirts etc.
And also the [``M``]odels of components that is used more than once, they tend to be models of how that component, like "ShopButton", should look like and behave.
Wheras the specified props could change dynamically to match other needs, for example, the buttons name.
* M[``V``]C reffer to my Views, or "pages". It holds the content of that View.
* MV[``C``] does apply through the Routes, which acts like a controller. In this project I've extracted the routes into seperate files.
And by that, we have more control over the routes, quite similar to a controller. Though, these routes works more like directions to what routes to use, depending on what user is logged in, for example.

# SOLID Principles
* I've commented in respective files where I found that I should use one or more principles, considering SOLID.
* For convinience, I've put together a list down below, to make it easier to find and navigate.

    ___

    * [NavbarComponent - DRY](/src/components/items/NavbarComponent.vue)
    * [ShoeCardComponent - OCP,SRP](/src/components/items/ShoeCardComponent.vue)
    * [WatchCardComponent - OCP,SRP](/src/components/items/WatchCardComponent.vue)
    * [FeaturedProductsSection - DRY,SRP](/src/components/sections/FeaturedProductsSection.vue)
    * [AdminRoutes - SRP,DRY](/src//controllers/AdminRoutes.ts)
    * [UserRoutes - SRP,DRY](/src/controllers//UserRoutes.ts)
    * [AssignRoutes - OCP](src/methods/AssignRoutes.ts)
    * [GetProducts - SRP](src/methods/GetProducts.ts)
    * [GetShoes - SRP](src/methods/GetShoes.ts)
    * [GetWatches - SRP](src/methods/GetWatches.ts)
    * [MapType - DRY](src/methods/MapType.ts)
    * [ProductInterface - OCP, LSP, ISP](src/models/interfaces/ProductInterface.ts)
    * [ShoeInterface - LSP, ISP](src/models/interfaces/ShoeInterface.ts)
    * [WatchInterface - LSP, ISP](src/models/interfaces/WatchInterface.ts)
    * [ApplicationRoutes - LSP](src/models/ApplicationRoutes.ts)
    * [router/index.ts - Experimental(SRP, kind of)](src/router/index.ts)

    ___