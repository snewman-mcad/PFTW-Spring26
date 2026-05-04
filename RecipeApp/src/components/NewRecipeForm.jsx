import "./NewRecipeForm.css";
import {useForm}  from "react-hook-form";

export function NewRecipeForm(props) {
    const {addNewYarn} = props;

    const {register, handleSubmit, formState: {errors}, reset} = useForm({defaultValues: {
        //providing default image just in case user doesn't have one
        image: './surprise.jpg'
    }});

    function submitAndClear(data) {
        addNewYarn(data);
        reset();
    }

    return (
        <div>
        <form onSubmit={handleSubmit(submitAndClear)} className="dark-background dark-background--form">
            <h2 className="h2-form">Add Another Yarn to the Wish List</h2>
            <div className="flex">
                {/*Form area for yarn name*/}
                <div className="form-group">
                    <label htmlFor="yarnName"><span className="blue-emphasis">Name</span> of the yarn:</label>
                    <input id="yarnName" {...register("name", {required: true})} />
                    {errors.name && (<p className="error">Yarn name is required</p>)}
                </div>

                {/*Form area for an image of the yarn*/}
                <div className="form-group">
                    <label htmlFor="image">Add an <span className="blue-emphasis">image</span>:</label>
                    <input id="image" {...register("image")} />
                </div>
            </div>

            {/*This is the set of radio buttons for yarn category*/}
            <div className="form-group">
                <p>What is the <span className="blue-emphasis">category</span> of the yarn?</p>
                <div className="radio-area">
                    <div>
                        <label htmlFor="weight-fingering">Fingering: </label>
                        <input type="radio" id="weight-fingering" value="Fingering" {...register("weight")}></input>
                    </div>
                    <div>
                        <label htmlFor="weight-lace">Lace: </label>
                        <input type="radio" id="weight-lace" value="Lace" {...register("weight")}></input>
                    </div>
                    <div>
                        <label htmlFor="weight-sport">Sport: </label>
                        <input type="radio" id="weight-sport" value="Sport" {...register("weight")}></input>
                    </div>
                    <div>
                        <label htmlFor="weight-sock">Sock: </label>
                        <input type="radio" id="weight-sock" value="Sock" {...register("weight")}></input>
                    </div>
                    <div>
                        <label htmlFor="weight-dk">DK: </label>
                        <input type="radio" id="weight-dk" value="DK" {...register("weight")}></input>
                    </div>
                    <div>
                        <label htmlFor="weight-worsted">Worsted: </label>
                        <input type="radio" id="weight-worsted" value="Worsted" {...register("weight")}></input>
                    </div>
                    <div>
                        <label htmlFor="weight-bulky">Bulky: </label>
                        <input type="radio" id="weight-bulky" value="Bulky" {...register("weight")}></input>
                    </div>
                </div>
            </div>

            {/*This is the set of radio buttons for yarn weight*/}
            <div className="form-group">
                <p>What is the <span className="blue-emphasis">weight</span> of the yarn?</p>
                <div className="radio-area radio-area--smaller">
                    <div>
                        <label htmlFor="weightNumber-one">One: </label>
                        <input type="radio" id="weightNumber-one" value="one" {...register("weightNumber")}></input>
                    </div>
                    <div>
                        <label htmlFor="weightNumber-two">Two: </label>
                        <input type="radio" id="weightNumber-two" value="two" {...register("weightNumber")}></input>
                    </div>
                    <div>
                        <label htmlFor="weightNumber-three">Three: </label>
                        <input type="radio" id="weightNumber-three" value="three" {...register("weightNumber")}></input>
                    </div>
                    <div>
                        <label htmlFor="weightNumber-four">Four: </label>
                        <input type="radio" id="weightNumber-four" value="four" {...register("weightNumber")}></input>
                    </div>
                    <div>
                        <label htmlFor="weightNumber-five">Five: </label>
                        <input type="radio" id="weightNumber-five" value="five" {...register("weightNumber")}></input>
                    </div>
                </div>
            </div>

            <div className="grid-form">
                {/*creating a field for yardage*/}
                <div className="form-group">
                    <label htmlFor="yardage">How many <span className="blue-emphasis">yards</span> per skein?</label>
                    {/*adding validation for max number*/}
                    <input type="number" id="yardage" {...register("yardage", {required: true, max: 1500})} className="input--number"></input>
                    {errors.yardage && (<p className="error">Your skein can be up to 1500 yards.</p>)}
                </div>

                {/*creating a field for fiber content*/}
                <div className="form-group row-span">
                    <label htmlFor="fiberContent">What is the <span className="blue-emphasis">fiber content</span> of the yarn?</label>
                    {/*adding validation on max number of characters*/}
                    <textarea id="fiberContent" {...register("fiber", {maxLength: 200})}></textarea>
                    {errors.fiber && (<p className="error">You can type a max of 200 characters.</p>)}
                </div>

                {/*creating a field for price per skein*/}
                <div className="form-group">
                    <label htmlFor="price">What is the <span className="blue-emphasis">price</span> per skein?</label>
                    {/*adding validation for max number*/}
                    <input type="number" id="price" {...register("price", {required: true, max: 100})} className="input--number"></input>
                    {errors.price && (<p className="error">Enter a price up to $100.</p>)}
                </div>
            </div>
            <div className="form-buttons">
                <button type="submit">Submit Skein</button>
                {/*I wanted a button to reset fields without submitting and this does work but the errors show up*/}
                <button className="reset" onClick={() => reset()}>Reset Form</button>
            </div>
        </form>
      </div>
    )
}