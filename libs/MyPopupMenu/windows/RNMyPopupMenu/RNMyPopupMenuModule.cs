using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace My.Popup.Menu.RNMyPopupMenu
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNMyPopupMenuModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNMyPopupMenuModule"/>.
        /// </summary>
        internal RNMyPopupMenuModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNMyPopupMenu";
            }
        }
    }
}
