import React, {Component} from 'react';

class Footer extends Component {
    render() {
        const now = new Date();
        const year = now.getFullYear();
        
        return (
            <div className="footer">
                &copy; Copyright {year}, WebSiteBot
            </div>
        );
    
    }
}

export default Footer;