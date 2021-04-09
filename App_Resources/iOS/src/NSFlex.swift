import Foundation
import UIKit

class NSFlex: NSObject {
    var compl: ((Int) -> Void)?
    @objc func setup(_ v: UIView, _ completion:@escaping (Int) -> Void) {
        print(v.frame)
       // completion(v.tag)
        compl = completion
        
        for (i, s) in v.subviews.enumerated() {
            for (j, c) in s.subviews.enumerated() {
//                c.tag = j
                c.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(open)))
            }
//            s.tag = i
            s.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(open)))
        }
    }
    
    @objc func open(sender: UITapGestureRecognizer) {
        compl!(sender.view!.tag)
    }
}
