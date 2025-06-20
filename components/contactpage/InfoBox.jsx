import React from 'react';

function InfoBox({className}) {
    const dsnCN = (baseClass, additionalClasses) => {
        return `${baseClass} ${additionalClasses || ''}`;
    };

    return (
        <div className={dsnCN('box-info-contact p-8 ', className)}>
            <ul className="space-y-8">
                <li className="border-b border-gray-100 pb-6">
                    <h5 className="title-block text-xl font-semibold text-gray-800 mb-4">Contact</h5>
                    <p className="text-p text-gray-600 mb-2">(647)-954-0040</p>
                    <div className="over-hidden">
                        <a className="link-hover text-primary hover:text-primary/90 transition-colors duration-300" 
                           data-hover-text="info@example.com"
                           href="mailto:info@alignersfit.com">info@alignersfit.com</a>
                    </div>
                </li>
                <li className="border-b border-gray-100 pb-6">
                    <h5 className="title-block text-xl font-semibold text-gray-800 mb-4">Address</h5>
                    <p className="text-p text-gray-600">Unit # B-02, 8760 Jane St, Concord, ON L4K 4V3</p>
                </li>
                <li>
                    <h5 className="title-block text-xl font-semibold text-gray-800 mb-4">Follow Us</h5>
                    <div className="space-y-3">
                        <div className="social-item over-hidden">
                            <a className="link-hover text-primary hover:text-primary/90 transition-colors duration-300" 
                               data-hover-text="Instagram" 
                               href="https://www.instagram.com/aligners_fit/"
                               target="_blank" 
                               rel="nofollow">Instagram</a>
                        </div>
                        <div className="social-item over-hidden">
                                <a className="link-hover text-primary hover:text-primary/90 transition-colors duration-300" 
                               data-hover-text="Facebook" 
                               href="https://www.facebook.com/alignersfit/"
                               target="_blank" 
                               rel="nofollow">Facebook</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default InfoBox;