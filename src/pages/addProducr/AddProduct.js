import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./index.scss"
import { Context } from './../../context/Context';

export default function AddProduct() {
    const context = useContext(Context)

    let baby = ["baby accessories", "baby bath", "Baby Skin Care"];
    let bath_body = ["Shower", "Soap", "Tissues"];
    let beauty = ["Acne Treatment", "Anti-Aging", "facial care"];
    let contact_lences = ["bausch and lomb", "bella", "bio true"];
    let dermocosmetics = ["anti-aging", "anti-dandruff", "body care"];
    let hair_care = ["anti-hair loss", "conditioner", "hair dyes"];
    let men_care = ["electric shavers for men", "men's deodorants", "shaving"];
    let oral_care = ["mouth care", "tooth brush", "tooth paste"];
    let personal_care = ["Accessories", "Breathing Aid", "air fresheners"];

    const[categ, setCateg] = useState("")
    const[categAr, setCategAr] = useState("")
    const[categBranch, setCategBranch] = useState("")
    const[categBranchAr, setCategBranchAr] = useState("")
    const[brand, setBrand] = useState("")
    const[brandAr, setBrandAr] = useState("")
    const[offer, setOffer] = useState("")
    const[offerAr, setOfferAr] = useState("")
    const[description, setDescription] = useState("")
    const[descriptionAr, setDescriptionAr] = useState("")
    const[productName, setProductName] = useState("")
    const[productNameAr, setProductNameAr] = useState("")
    const[amount, setAmount] = useState("")
    const[price, setPrice] = useState("")
    const[imagePath, setImagePath] = useState("")
    function reset(){
        setCateg("")
        setCategAr("")
        setCategBranch("")
        setCategBranchAr("")
        setBrand("")
        setBrandAr("")
        setOffer("")
        setOfferAr("")
        setDescription("")
        setDescriptionAr("")
        setProductName("")
        setProductNameAr("")
        setAmount("")
        setPrice("")
        setImagePath("")
    }
    const[current, setCurrent] = useState([])

    useEffect(()=>{
        setCurrent(current)
    },[current])

    const[status, setStatus] = useState("d-none")

    function handleCateg(e){
        setCateg(e.target.value)
        switch (e.target.value) {
            case "baby":
                setCurrent(baby); 
                setCategAr("???????????????? ??????????????")
                break;
            case "bath body":
                setCurrent(bath_body);
                setCategAr("???????????????? ??????????????????")
                break;
            case "beauty":
                setCurrent(beauty);
                setCategAr("???????????????? ??????????????")
                break;
            case "contact lences":
                setCurrent(contact_lences);
                setCategAr("?????????????? ??????????????")
                break;
            case "dermocosmetics":
                setCurrent(dermocosmetics);
                setCategAr("???????????? ?????????????? ????????????")
                break;
            case "hair care":
                setCurrent(hair_care);
                setCategAr("?????????????? ????????????")
                break;
            case "men care":
                setCurrent(men_care);
                setCategAr("???????????????? ????????????")
                break;
            case "oral care":
                setCurrent(oral_care);
                setCategAr("?????????????? ??????????")
                break;
            case "personal care":
                setCurrent(personal_care);
                setCategAr("?????????????? ??????????????")
                break;
        
            default:
                break;
        }
        console.log(current)
    }

    function handleBranches(e){
        setCategBranch(e.target.value)
        switch (e.target.value) {
            case "baby accessories":
                setCategBranchAr("???????????????? ??????????????")
                break;
            case "baby bath":
                setCategBranchAr("???????? ??????????????")
                break;
            case "Baby Skin Care":
                setCategBranchAr("?????????????? ?????????? ??????????")
                break;
            case "Shower":
                setCategBranchAr("??????????????")
                break;
            case "Soap":
                setCategBranchAr("??????????")
                break;
            case "Tissues":
                setCategBranchAr("????????????")
                break;
            case "Acne Treatment":
                setCategBranchAr("???????? ???? ????????????")
                break;
            case "Anti-Aging":
                setCategBranchAr("???????????? ????????????????")
                break;
            case "facial care":
                setCategBranchAr("?????????????? ????????????")
                break;
            case "bausch and lomb":
                setCategBranchAr("???????? ?????? ????????")
                break;
            case "bella":
                setCategBranchAr("????????")
                break;
            case "bio true":
                setCategBranchAr("???????? ??????")
                break;
            case "anti-aging":
                setCategBranchAr("???????????? ????????????????")
                break;
            case "anti-dandruff":
                setCategBranchAr("???????????? ????????????")
                break;
            case "body care":
                setCategBranchAr("?????????????? ????????????")
                break;
            case "anti-hair loss":
                setCategBranchAr("???????? ???????????? ??????????")
                break;
            case "conditioner":
                setCategBranchAr("???????? ?????????? ??????????")
                break;
            case "hair dyes":
                setCategBranchAr("?????????? ??????????")
                break;
            case "electric shavers for men":
                setCategBranchAr("?????????????? ?????????????? ???????????????????? ????????????")
                break;
            case "men's deodorants":
                setCategBranchAr("???????? ?????????? ????????????")
                break;
            case "shaving":
                setCategBranchAr("??????????????")
                break;
            case "mouth care":
                setCategBranchAr("?????????????? ??????????")
                break;
            case "tooth brush":
                setCategBranchAr("?????????? ??????????????")
                break;
            case "tooth paste":
                setCategBranchAr("?????????? ??????????????")
                break;
            case "Accessories":
                setCategBranchAr("??????????????????????")
                break;
            case "Breathing Aid":
                setCategBranchAr("?????????? ????????????")
                break;
            case "air fresheners":
                setCategBranchAr("????????????????")
                break;
            default:
                break;
        }
    }

    function addProduct() {
        if(categ != "" && categBranch != "" && brand != "" && offer != "" && description != "" && productName != "" 
            && amount != "" && price != "" && imagePath != "" && categAr != "" && categBranchAr != ""  && brandAr != "" 
            && offerAr != "" && descriptionAr != "" && productNameAr != ""){
            setStatus("d-none")
            context.products.push({
                categoryName: categ,
                categoryBranchName: categBranch,
                brand:brand,
                offer:offer,
                description:description,
                productName:productName,
                amount:Number(amount),
                price:Number(price),
                imagePath:imagePath,
                categoryNameAr:categAr,
                categoryBranchNameAr:categBranchAr,
                brandAr:brandAr,
                offerAr:offerAr,
                descriptionAr:descriptionAr,
                nameAr:productNameAr,
                date: new Date().getTime()
            })
            fetch('http://localhost:3001/products', {
                method: 'POST',
                body: JSON.stringify({
                    categoryName: categ,
                    categoryBranchName: categBranch,
                    brand:brand,
                    offer:offer,
                    description:description,
                    productName:productName,
                    amount:Number(amount),
                    price:Number(price),
                    imagePath:imagePath,
                    categoryNameAr:categAr,
                    categoryBranchNameAr:categBranchAr,
                    brandAr:brandAr,
                    offerAr:offerAr,
                    descriptionAr:descriptionAr,
                    nameAr:productNameAr,
                    date: new Date().getTime()
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then(() => reset())
                .then(()=> alert("You Added New Product"))

            }else{
                setStatus("")
                console.log(status)
            }
        }
        useEffect(()=>{
            setStatus(status)
        },[status])

    return (
        <div className="add-product">
            <Navbar compo={true} />
            {localStorage.getItem("role") == "seller" ? 
            <div className="container small">
            <h3 className="text-info my-3">add product</h3>
            <form className="row g-3 needs-validation" noValidate>
            <div className="en col-6">
                <div className="row g3">
                    <div className="col-12">
                        <label htmlFor="categoryName" className="form-label">Category name</label>
                        <select className="form-select" id="categoryName" value={categ} onChange={(e)=> handleCateg(e)} required>
                            <option disabled value="">Choose...</option>
                            <option value="baby">baby</option>
                            <option value="bath body">bath & body</option>
                            <option value="beauty">beauty</option>
                            <option value="contact lences">contact lences</option>
                            <option value="dermocosmetics">dermocosmetics</option>
                            <option value="hair care">hair care</option>
                            <option value="men care">men care</option>
                            <option value="oral care">oral care</option>
                            <option value="personal care">personal care</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select the Category name.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="categoryBranchName" className="form-label">Category branch name</label>
                        <select className="form-control" placeholder="Branch" id="categoryBranchName"  value={categBranch} onChange={(e)=> handleBranches(e)} required >
                            <option disabled value="">Choose...</option>
                            {current.map(el => <option key={el} value={el}>{el}</option>)}
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="brandName" className="form-label">brand</label>
                        <input type="text" placeholder="brand" className="form-control" id="brandName" value={brand} onChange={(e)=> setBrand(e.target.value.trim())} required/>
                        <div className="invalid-feedback">
                            Please enter the brand name.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="offer" className="form-label">offer</label>
                        <input type="text" placeholder="offer" className="form-control" id="offer" value={offer} onChange={(e)=> setOffer(e.target.value.trim())} required/>
                        <div className="invalid-feedback">
                            Please enter the offer of the product.
                        </div>
                    </div>
                    <div className="mb-12">
                        <label htmlFor="description" className="form-label">describtion</label>
                        <textarea className="form-control" id="description" placeholder="Product Describtion" value={description} onChange={(e)=> setDescription(e.target.value.trim())} required></textarea>
                        <div className="invalid-feedback">
                            Please enter the describtion of the product.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="productName" className="form-label">produact name</label>
                        <input type="text" placeholder="produact name" className="form-control" id="productName" value={productName} onChange={(e)=> setProductName(e.target.value.trim())} required/>
                        <div className="invalid-feedback">
                            Please enter the name of the product.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="amount" className="form-label">amount</label>
                        <input type="number" min="1" className="form-control " id="amount" value="10" aria-describedby="validationServer05Feedback" value={amount} onChange={(e)=> setAmount(e.target.value.trim())} required/>
                        <div id="validationServer05Feedback" className="invalid-feedback">
                            Please enter the amount.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="price" className="form-label">price</label>
                        <input type="number" min="1" className="form-control " id="price" value="10" aria-describedby="validationServer05Feedback" value={price} onChange={(e)=> setPrice(e.target.value.trim())} required/>
                        <div id="validationServer05Feedback" className="invalid-feedback">
                            Please enter the product price.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="imagePath" className="form-label">image path</label>
                        <input type="text" placeholder="image path" value="" className="form-control" id="imagePath" value={imagePath} onChange={(e)=> setImagePath(e.target.value.trim())} required/>
                        <div className="invalid-feedback">
                            Please enter the path of product image.
                        </div>
                    </div>

                </div>
            </div>
            <div className="ar col-6 text-end" dir="rtl">
                <div className="col-12">
                    <label htmlFor="categoryNameAr" className="form-label">?????? ??????????</label>
                    <input disabled type="text" placeholder="?????? ??????????" className="form-control" id="categoryNameAr" value={categAr} onChange={(e)=> setCategAr(e.target.value.trim())} required/>
                </div>
                <div className="col-12">
                    <label htmlFor="categoryBranchNameAr" className="form-label">?????? ??????????</label>
                    <input disabled type="text" placeholder="?????? ??????????" className="form-control" id="categoryBranchNameAr" value={categBranchAr} onChange={(e)=> setCategBranchAr(e.target.value.trim())} required/>
                </div>
                <div className="col-12">
                    <label htmlFor="brandAr" className="form-label">?????? ??????????????</label>
                    <input type="text" placeholder="?????? ??????????????" className="form-control" id="brandAr" value={brandAr} onChange={(e)=> setBrandAr(e.target.value.trim())} required/>
                    <div className="invalid-feedback">
                        ???? ???????? ???????? ?????????? ????????????
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="offerAr" className="form-label">??????????</label>
                    <input type="text" placeholder="??????????" className="form-control" id="offerAr" value={offerAr} onChange={(e)=> setOfferAr(e.target.value.trim())} required/>
                    <div className="invalid-feedback">
                        ???? ???????? ???????? ?????????? ????????????
                    </div>
                </div>
                
                <div className="mb-12">
                    <label htmlFor="descriptionAr" className="form-label">??????????</label>
                    <textarea className="form-control" id="descriptionAr" placeholder="?????? ????????????" value={descriptionAr} onChange={(e)=> setDescriptionAr(e.target.value.trim())} required></textarea>
                    <div className="invalid-feedback">
                        ???? ???????? ???????? ?????? ????????????
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="nameAr" className="form-label">?????? ????????????</label>
                    <input type="text" placeholder="??????????" className="form-control" id="nameAr" value={productNameAr} onChange={(e)=> setProductNameAr(e.target.value.trim())} required/>
                    <div className="invalid-feedback">
                        ???? ???????? ???????? ?????? ????????????
                    </div>
                </div>
            </div>
            <div className="col-12 mb-5">
                <p className={`${status} lead text-danger text-center fw-bold`}>All Fields Must Be Filled</p>
                <button className="btn btn-primary w-100" type="button" onClick={()=>addProduct()}>Add Product</button>
            </div>
        </form>
            </div>
            : 
            <div className="container ">
                <div className="text-center not-found m-5">
                    <i className="fas fa-exclamation-triangle"></i>
                    <p className="lead my-3 fw-bold">this page is available only for sellers</p>
                </div>
            </div>   
        }
            <Footer />
        </div>
    )
}
