import "./NewYarnForm.css";
import {useForm}  from "react-hook-form";

export function NewYarnForm(props) {
    const {addNewYarn} = props;

    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {
        //providing default image just in case user doesn't have one
        image: './surprise.jpg'
    }});

    return (
        <div>
        <form onSubmit={handleSubmit(addNewYarn)} className='dark-background'>
          {/*Form area for yarn name*/}
          <div className="form-group">
            <label htmlFor="yarnName">Name of the yarn: </label>
            <input id="yarnName" {...register("name", {required: true})} />
            {errors.name && (<p className="error">Yarn name is required</p>)}
          </div>

          {/*Form area for an image of the yarn*/}
          <div className="form-group">
            <label htmlFor="image">Upload an image</label>
            <input id="image" {...register("image")} />
          </div>

          {/*This is the set of radio buttons for yarn category*/}
          <div className="form-group">
            <div>
              <p>What is the category of the yarn?</p>
              <label htmlFor="weight-fingering">Fingering: </label>
              <input type="radio" id="weight-fingering" value="Fingering" {...register("weight")}></input>

              <label htmlFor="weight-lace">Lace: </label>
              <input type="radio" id="weight-lace" value="Lace" {...register("weight")}></input>

              <label htmlFor="weight-sport">Sport: </label>
              <input type="radio" id="weight-sport" value="Sport" {...register("weight")}></input>

              <label htmlFor="weight-sock">Sock: </label>
              <input type="radio" id="weight-sock" value="Sock" {...register("weight")}></input>

              <label htmlFor="weight-dk">DK: </label>
              <input type="radio" id="weight-dk" value="DK" {...register("weight")}></input>

              <label htmlFor="weight-worsted">Worsted: </label>
              <input type="radio" id="weight-worsted" value="Worsted" {...register("weight")}></input>

              <label htmlFor="weight-bulky">Bulky: </label>
              <input type="radio" id="weight-bulky" value="Bulky" {...register("weight")}></input>
            </div>
          </div>

          {/*This is the set of radio buttons for yarn weight*/}
          <div className="form-group">
            <div>
              <p>What is the weight of the yarn?</p>
              <label htmlFor="weightNumber-one">One: </label>
              <input type="radio" id="weightNumber-one" value="one" {...register("weightNumber")}></input>

              <label htmlFor="weightNumber-two">Two: </label>
              <input type="radio" id="weightNumber-two" value="two" {...register("weightNumber")}></input>

              <label htmlFor="weightNumber-three">Three: </label>
              <input type="radio" id="weightNumber-three" value="three" {...register("weightNumber")}></input>

              <label htmlFor="weightNumber-four">Four: </label>
              <input type="radio" id="weightNumber-four" value="four" {...register("weightNumber")}></input>

              <label htmlFor="weightNumber-five">Five: </label>
              <input type="radio" id="weightNumber-five" value="five" {...register("weightNumber")}></input>
            </div>
          </div>

          {/*creating a field for yardage*/}
          <div className="form-group">
            <label htmlFor="yardage">How many yards per skein?</label>
            {/*adding validation for max number*/}
            <input type="number" id="yardage" {...register("yardage", {required: true, max: 1500})}></input>
            {errors.yardage && (<p className="error">Your skein can be up to 1500 yards.</p>)}
          </div>

          {/*creating a field for fiber content*/}
          <div className="form-group">
            <label htmlFor="fiberContent">What is the fiber content of the yarn?</label>
            {/*adding validation on max number of characters*/}
            <textarea id="fiberContent" {...register("fiber", {maxLength: 200})}></textarea>
            {errors.fiber && (<p className="error">You can type a max of 200 characters.</p>)}
          </div>

          {/*creating a field for price per skein*/}
          <div className="form-group">
            <label htmlFor="price">What is the price per skein?</label>
            {/*adding validation for max number*/}
            <input type="number" id="price" {...register("price", {required: true, max: 100})}></input>
            {errors.price && (<p className="error">Enter a price up to $100.</p>)}
          </div>
          <button type="submit">Submit Skein</button>
        </form>
      </div>
    )
}