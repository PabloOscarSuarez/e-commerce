import React from "react"

export default ({ handleChangeText, handleSubmit }) => {
    return (

        <div className="row">
            <form className="mx-auto col-md-6" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Deja tu comentario</label>
                    <textarea name="content"
                        className="form-control shadow-lg"
                        rows="3"
                        onChange={handleChangeText}>
                    </textarea>
                </div>
                <div className="text-right">
                    <button type="submit" className="btn btn-success">Enviar !</button>
                </div>
            </form>
        </div>
    );
};
