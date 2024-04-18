import React, { useState } from 'react'
import RecipeHeader from './RecipeHeader'

const ViewAllRecipes = () => {
    const [data, changeData] = useState(
        [
            { "RecipeTitle": "Brownie", "imglink": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOtuNu4e2ue19avm-FnUyV4fpsbnIpyC3VlZquHC-z3fFhrugtD4yh0Cs3taRRFCTXIrlKRlhN2EfecINr8zeXT22nSD-d5mn7pg8RXCUD0KhSiCZK9l6uzc5k4c8yh6q8cX2fcUxDzTs/s16000/single+serving+brownie2.jpg" },
            { "RecipeTitle": "Apple Crumble", "imglink": "https://ashbaber.com/wp-content/uploads/2022/10/Single-serve-apple-crumble-small.jpg" },
            { "RecipeTitle": "Chocolate Cupcake", "imglink": "https://i0.wp.com/annikaeats.com/wp-content/uploads/2024/01/DSC_0459.jpg?fit=683%2C1024&ssl=1" },
            { "RecipeTitle": "Pancake", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TBfabcfFjtW5ZeaQSOp0NLfaI3P7tdgwcuNK5OJJfw&s" },
            { "RecipeTitle": "Peanut Butter Cheesecake", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUo6Zu54ngOiKbCpCiXxz_4aMY_t9vvdjc0c7AmLQMQ&s" },
            { "RecipeTitle": "Hyderabadi Biryani", "imglink": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg" },
            { "RecipeTitle": "Dhakai Porota", "imglink": "https://c.ndtvimg.com/2023-01/qhqiliag_parotta_625x300_13_January_23.jpg" },
            { "RecipeTitle": "Chocolate Chip Cookie", "imglink": "https://www.dessertfortwo.com/wp-content/uploads/2023/04/Single-Serve-Chocolate-Chip-Cookie-5.jpg" },
            { "RecipeTitle": "Tahini Maple Dijon Carrots", "imglink": "https://findingtimeforcooking.com/wp-content/uploads/2020/12/Socca-Chickpea-Flatbread-with-Roasted-Vegetables-done-1024x768.jpg" },
            { "RecipeTitle": "IceCream", "imglink": "https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg" },
            { "RecipeTitle": "Sadhya", "imglink": "https://upload.wikimedia.org/wikipedia/commons/9/95/Sadhya_DSW.jpg" },
            { "RecipeTitle": "Pizza", "imglink": "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" },
            { "RecipeTitle": "Dhosa", "imglink": "https://thumbs.dreamstime.com/b/homemade-dosa-dhosa-masala-plain-maisuri-ghee-roast-chutney-sambar-banana-leaf-isolated-south-indian-breakfast-205193390.jpg" },
            { "RecipeTitle": "Idli", "imglink": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/idli-recipe.jpg" },
            { "RecipeTitle": "Puttu", "imglink": "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/puttu-recipe-1a.jpg" },
            

        ]
    )
    return (
        <div>
            <RecipeHeader />
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                        <div class="row g-3">

                            {data.map(
                                (value, index) => {
                                    return <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img height="350" src={value.imglink}
                                                class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                                <a href="#" class="btn btn-primary">{value.RecipeTitle}</a>
                                            </div>
                                        </div>

                                    </div>
                                }
                            )}







                        </div>


                    </div>


                </div>
            </div>

        </div>
    )
}

export default ViewAllRecipes