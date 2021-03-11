# Mumblr
[Link to live website](https://mumblr.herokuapp.com/#/login)

## The thought process behind the project
I decided to base my project on and take inspiration from Tumblr because it's a website that is very dear to my heart. Growing up it was a place where I could express whatever was on my mind, share thoughts, interesting media, memes, art, ideas and find like minded people, it was a way for my to find community online.

On the techincal side I believe Tumblr is a very good example of a dynamic app which has basic CRUD functionality, and since that aligned with the skills I spent countless hours working to master, I though it was the perfect website to try to recreate/make my own version of it.

It was pretty intimidating to start this project given that it has so many moving parts, and therefore one of the most dificult challenges I faced along the way was to be able to refactor code as needed without breaking other parts of the project or causing other bugs, I had to do rigorous constant testing of the different features every step of the way to make sure that it was still working properly after every single significant change. I learned a lot about the importance of developing a debugging strategy, which can be different depending of what kind of programmer you are, but it always comes down to making use of all the tools you have in order to be able to pinpoint where the bug is and fix it.

## Basic Functionality
Like I mentioned before, I mainly focused on implementing a CRUD functionality, and as a user you are able to create, view, update and destroy the posts that you make. These posts can be of three different kinds; video, photo or text, and for this I made use of Amazon web Services in order to be able to upload the files and display them in the corresponding component.
![alt text](https://github.com/Helenasky93/Mumblr/blob/master/app/assets/images/Screen%20Shot%202021-03-11%20at%2010.36.39%20AM.png")

You are also able to like other user's posts and follow said users, when you follow a user, their posts populate your feed along with your own and they are sorted by newest first. Lastly you are able to change your profile picture if you want.
![alt text](https://github.com/Helenasky93/Mumblr/blob/master/app/assets/images/Screen%20Shot%202021-03-11%20at%2010.43.56%20AM.png")

One of the features that I'm ost proud of is the modal I implemented to both create and update a post, and since I reused the same blueprint, switching the form type accordingly, I believe it is a great example of dry code:

```javascript
componentDidMount() {
        let modal = document.getElementById('modal' + this.post.id);
        let button = document.getElementById('modalButton' + this.post.id);
        let span = document.getElementById('closeModal' + this.post.id);
        button.onclick = () => modal.style.display = 'block';
        span.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        };
    }

    render() {
        return (
            <>
            <button className='modalButton' id={'modalButton' + this.post.id}>{this.props.formType}</button>
            <div id={'modal' + this.post.id} className='newPostFormDiv'>
                <form onSubmit={this.handleSubmit} className='newPostForm'>
                        <label>Title
                        <input className='postFormTitle' onChange={this.handleChange('title')} type="text" value={this.state.title} />
                    </label>
                    <label>Body
                        <input className='postFormBody' onChange={this.handleChange('body')} type="description" value={this.state.body} />
                    </label>
                    <label>Type

                        <select name="type" className="postFormPostType"  value={this.state.post_type}  onChange={this.handleChange('post_type')}>
                            <option value=""></option>
                            <option value="text">Text</option>
                            <option value="photo">Photo</option>
                            <option value="video">Video</option>
                        </select>
                        
                        {/* <input onChange={this.handleChange('post_type')} type="text" value={this.state.post_type || this.props?.post?.post_type} /> */}
                    </label>
                    
                
                            <div style={{ display: "block", textAlign: "center" }}>
                                <label > <span className="btn">Select Image</span>
                                    <input style={{ visibility: 'hidden', position: 'absolute' }} className="form-control" type="file" name="files" onChange={this.handleFile.bind(this)} />

                                </label>

                            </div>
                    
        <button className='newPostFormButton'>{this.props.formType}</button>
                <span id={'closeModal' + this.post.id}>Cancel</span>
                </form>
            </div>
            </>
        )
    };
```
## 
   
