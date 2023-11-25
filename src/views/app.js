console.log('works');
import page from '../../node_modules/page/page.mjs'
import { addRenderer } from '../middlewares/render.js';
import { homePage } from './homeView.js';
import { registerPage } from './registerView.js';
import { loginPage } from './loginView.js';
import { dashboardPage } from './dashboardView.js';
import { detailsPage } from './detailsView.js';
import { createPage } from './createView.js';
import { editPage } from './editView.js';
import { searchPage } from './searchView.js';


page(addRenderer);
page('/index.html', '/');
page('/', homePage);
page('/dashboard', dashboardPage)
page('/dashboard/:id', detailsPage)
page('/dashboard/:id/edit', editPage)
page('/create', createPage)
page('/search', searchPage)
page('/register', registerPage)
page('/login', loginPage)
page('*', '/');
page.start()